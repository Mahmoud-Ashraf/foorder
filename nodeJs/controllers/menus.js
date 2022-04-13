const Menu = require('../models/menu');
const Resturant = require('../models/resturant');
const { validationResult } = require("express-validator");
const user = require('../models/user');

exports.getMenu = (req, res, next) => {
    const currentPage = req.query.page || 1;
    let perPage = req.query.perPage || 2;
    const resturantId = req.params.resturantId;
    let totalItems;
    Menu.find({ resturantId: resturantId })
        .countDocuments()
        .then(count => {
            if (count === 0) {
                const error = new Error('No Menu Found');
                error.statusCode = 404;
                throw error;
            }
            if (perPage == 0) {
                perPage = count;
            }
            totalItems = count;
            return Menu.find({ resturantId: resturantId })
                .skip((currentPage - 1) * perPage)
                .limit(perPage)
        })
        // .populate('menu')
        .then(menu => {
            res
                .status(200)
                .json({ message: 'menu fetched', menu: menu, currentPage: currentPage, perPage: perPage, totalItems: totalItems });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getMenuItem = (req, res, next) => {
    // console.log(req.params.menuItemId);
    const menuItemId = req.params.menuItemId;
    Menu.findById(menuItemId)
        .then(menuItem => {
            if (!menuItem) {
                const error = new Error('Could not find a order');
                error.statusCode = 404;
                throw error;
            }
            // console.log('mahmoud', menuItem)
            res
                .status(200)
                .json(menuItem);
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.addMenuItem = (req, res, next) => {
    // console.log('menu request', req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation Faild, Enter data in correct format');
        error.statusCode = 422;
        throw error;
        // res.status(422).json({
        //   message: "Validation Faild, Enter data in correct format",
        //   errors: errors.array(),
        // });
        // console.log('hello', res);
    }
    const name = req.body.name;
    const price = req.body.price;
    // const count = req.body.count;
    // const resturant = req.body.resturantId;
    // console.log(req);
    let joinResturant;

    const menuItem = new Menu({
        name: name,
        price: price,
        resturantId: req.body.resturantId,
        // count: 0
    });
    menuItem.save()
        .then(menuItem => {
            // let menuItem = req.body;
            // menuItem.id = new Date().toISOString();
            // Create menuItem in db
            // 201 status code means created in db
            // 200 status code means just success
            return Resturant.findById(req.body.resturantId);
        })
        .then(resturant => {
            // console.log('resturaaaaant', resturant);
            joinResturant = resturant;
            resturant.menu.push(menuItem);
            return resturant.save();
        })
        .then(result => {
            res.status(201).json({
                message: "menuItem added successfully",
                menuItem: menuItem,
                resturant: { _id: joinResturant._id, name: joinResturant.name }
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.updateMenuItem = (req, res, next) => {
    const menuItemId = req.params.menuItemId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation Faild, Enter data in correct format');
        error.statusCode = 422;
        throw error;
        // res.status(422).json({
        //   message: "Validation Faild, Enter data in correct format",
        //   errors: errors.array(),
        // });
        // console.log('hello', res);
    }
    const name = req.body.name;
    const price = req.body.price;
    Menu.findById(menuItemId)
        .then(menuItem => {
            if (!menuItem) {
                const error = new Error('Could not find a menuItem');
                error.statusCode = 404;
                throw error;
            }
            menuItem.name = name;
            menuItem.price = price;
            return menuItem.save();
        })
        .then(result => {
            return res.status(200).json({ message: 'menuItem updat success', menuItem: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.deleteMenuItem = (req, res, next) => {
    const menuItemId = req.params.menuItemId;
    let resturantId;
    Menu.findById(menuItemId)
        .then(menuItem => {
            if (!menuItem) {
                const error = new Error('Could not find a menuItem');
                error.statusCode = 404;
                throw error;
            }
            resturantId = menuItem.resturantId;
            return Menu.findByIdAndRemove(menuItemId);
        })
        .then(result => {
            return Resturant.findById(resturantId);
        })
        .then(resturant => {
            resturant.menu.pull(menuItemId);
            return resturant.save();
        })
        .then(result => {
            return res.status(200).json({ message: 'Menu Item deleted' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}
