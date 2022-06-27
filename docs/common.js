(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "NuUg":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests.service */ "ucP1");


class OrderService {
    constructor(requests) {
        this.requests = requests;
    }
    getOrders(page = 1, perPage = 0) {
        return this.requests.getApi(`resturants?page=${page}&perPage=${perPage}`);
        // .then(res => {
        //   if (res.status !== 200) {
        //     throw new Error('Faild To Fetch Resturants');
        //   }
        //   return res.json();
        // })
        // .then(resData => console.log('get response', resData))
        // .catch(err => console.log(err));
    }
    getOrdersPerUser(userId) {
        return this.requests.getApi(`userOrders/${userId}`);
        // .then(res => {
        //   if (res.status !== 200) {
        //     throw new Error('Faild To Fetch Resturants');
        //   }
        //   return res.json();
        // })
        // .then(resData => console.log('get response', resData))
        // .catch(err => console.log(err));
    }
    getOrder(id) {
        return this.requests.getApi(`order/${id}`);
    }
    updateOrder(id, order) {
        return this.requests.putApi(`order/${id}`, order);
    }
    addOrder(order) {
        return this.requests.postApi('order', order);
    }
    // deleteResturant(id: any) {
    //   return this.requests.deleteApi(`resturant/${id}`);
    // }
    getTodayOrders(resturantId) {
        return this.requests.getApi(`todayOrders/${resturantId}`);
    }
    getCollectedOrders(page = 1, perPage = 0) {
        return this.requests.getApi(`collected-orders?page=${page}&perPage=${perPage}`);
    }
    getCollectedOrder(collectedOrderId) {
        return this.requests.getApi(`collected-order/${collectedOrderId}`);
    }
    collectOrder(collectedOrder) {
        return this.requests.postApi(`collect-order`, collectedOrder);
    }
    checkTodayCollectedOrder() {
        return this.requests.getApi(`checkTodayCollectedOrder`);
    }
    updateCollectedOrder(collectedOrderId, collectedOrder) {
        return this.requests.putApi(`update-collected-order/${collectedOrderId}`, collectedOrder);
    }
    updateTodayOrder(id, order) {
        return this.requests.putApi(`updateTodayOrder/${id}`, order);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map