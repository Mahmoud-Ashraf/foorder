const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Object with timestamp: true is for ad createdAt & updatedAt to my document
const resturantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Resturant', resturantSchema);
// const mongoDb = require('mongodb');
// const getDb = require('../utils/database').getDb;

// class Resturant {
//     constructor(name, content, id) {
//         this.name = name;
//         this.content = content;
//         this._id = new mongoDb.ObjectId(id);
//     }

//     save() {
//         const db = getDb();
//         let dbOperation;
//         console.log('id check', this._id);
//         if (this._id) {
//             dbOperation = db.collection('resturants').updateOne({_id: this._id}, {$set: this});
//         } else {
//             dbOperation = db.collection('resturants').insertOne(this);
//         }
//         return dbOperation
//             .then(result => {
//                 // console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     static fetchAll() {
//         const db = getDb();
//         return db.collection('resturants').find().toArray()
//             .then(resturants => {
//                 // console.log(resturants);
//                 return resturants
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     static findById(resId) {
//         const db = getDb();
//         return db.collection('resturants').find({ _id: new mongoDb.ObjectId(resId) }).next()
//             .then(resturant => {
//                 // console.log(resturant);
//                 return resturant
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }

// module.exports = Resturant;