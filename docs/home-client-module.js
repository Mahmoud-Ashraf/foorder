(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-client-module"],{

/***/ "9aj6":
/*!************************************************************!*\
  !*** ./src/app/home/components/wallet/wallet.component.ts ***!
  \************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WalletComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adf3 Elly 3leeeeek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3aaaaaash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "alert-danger": a0 }; };
const _c1 = function (a0, a1) { return { "text-danger": a0, "text-success": a1 }; };
class WalletComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.loggedUser = this.authService.getLoggedUser();
        this.userListnerSub = this.authService
            .getAuthUserListner()
            .subscribe((user) => {
            this.loggedUser = user;
            // console.log('loggedUser: ', this.loggedUser);
        });
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], decls: 12, vars: 13, consts: [[1, "row", "justify-content-center"], [1, "col-12"], [1, "alert", "text-center", 3, "ngClass"], [4, "ngIf"], [1, "col-6"], [1, "today-order-card"], [1, "h1", "text-center", 3, "ngClass"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WalletComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WalletComponent_p_4_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, (ctx.loggedUser == null ? null : ctx.loggedUser.wallet) < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loggedUser == null ? null : ctx.loggedUser.wallet) < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loggedUser == null ? null : ctx.loggedUser.wallet) >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.loggedUser == null ? null : ctx.loggedUser.name, "'s Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, (ctx.loggedUser == null ? null : ctx.loggedUser.wallet) < 0, (ctx.loggedUser == null ? null : ctx.loggedUser.wallet) >= 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.loggedUser == null ? null : ctx.loggedUser.wallet));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "HDx1":
/*!********************************************************!*\
  !*** ./src/app/home/components/poll/poll.component.ts ***!
  \********************************************************/
/*! exports provided: PollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollComponent", function() { return PollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/loader.service */ "cxgq");
/* harmony import */ var _shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/resturants.service */ "/kEZ");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "jfpu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../count-down/count-down.component */ "Sd7v");







function PollComponent_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks for your vote, wait the result in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PollComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vote for one of this restaurants in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function PollComponent_div_0_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollComponent_div_0_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const resturant_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.selectResturant(resturant_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resturant_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r3.selectedResturant == null ? null : ctx_r3.selectedResturant._id) === (resturant_r4 == null ? null : resturant_r4._id) && !(ctx_r3.currentUser == null ? null : ctx_r3.currentUser.voted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resturant_r4 == null ? null : resturant_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resturant_r4 == null ? null : resturant_r4.vote);
} }
function PollComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PollComponent_div_0_p_2_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PollComponent_div_0_p_3_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-count-down", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PollComponent_div_0_li_6_Template, 5, 5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.vote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.voted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.voted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("endTime", ctx_r0.pollEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resturants);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.selectedResturant || (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.voted));
} }
class PollComponent {
    constructor(loader, resturantsService, authService, homeService) {
        this.loader = loader;
        this.resturantsService = resturantsService;
        this.authService = authService;
        this.homeService = homeService;
        this.pollEndTime = [23, 55, 0];
        this.showPoll = false;
    }
    ngOnInit() {
        this.showHideDependOnCountDown();
        this.getResturants();
        this.getUser();
    }
    selectResturant(resturant) {
        var _a;
        if (!((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.voted)) {
            this.selectedResturant = resturant;
            // console.log(this.selectedResturant);
        }
    }
    vote() {
        var _a;
        // console.log('selected before update', this.selectedResturant);
        if (this.selectedResturant && this.currentUser && !((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.voted)) {
            this.selectedResturant.vote += 1;
            this.selectedResturant.lastVotedAt = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            this.currentUser.voted = true;
            this.currentUser.lastVoteDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            // console.log('selected after update', this.selectedResturant, this.currentUser);
            this.updateResturant(this.selectedResturant._id, this.selectedResturant);
            this.updateUser(this.currentUser._id, this.currentUser);
            // this.getResturants();
            // this.authService.autoAuthUser();
            this.selectedResturant = undefined;
        }
    }
    getResturants() {
        this.resturantsSub = this.resturantsService.getResturants().subscribe((resturants) => {
            console.log('Resturants object', resturants);
            this.resturants = resturants.resturants;
            this.resetResturantsVote();
        });
    }
    resetResturantsVote() {
        const notReset = this.resturants.some(resturant => {
            console.log('resturant ', resturant, 'lastVotedAt is today?: ', new Date().getDate() === new Date(resturant.lastVotedAt).getDate());
            return new Date().getDate() === new Date(resturant.lastVotedAt).getDate();
        });
        console.log('reset status', notReset);
        if (!notReset) {
            this.resturantsService.resetResturantsVote().subscribe(resturants => {
                this.resturants.forEach(resturant => {
                    resturant.vote = 0;
                });
                console.log(resturants);
            });
        }
    }
    updateResturant(resturantId, resturant) {
        this.updateResturantSub = this.resturantsService.updateResturant(resturantId, resturant).subscribe(resturant => {
            // console.log('updated res', resturant);
            // this.getResturants();
        });
    }
    updateUser(userId, user) {
        this.updateUserSub = this.authService.updateUser(userId, user).subscribe(user => {
            console.log('updated user', user, this.currentUser);
            // this.getUser();
        });
    }
    showHideDependOnCountDown() {
        const timeTillOrderEnd = this.homeService.calcDateDiffInMs(this.pollEndTime);
        if (timeTillOrderEnd > 0) {
            this.showPoll = true;
            this.countDownTimer = setTimeout(() => {
                this.showPoll = false;
            }, timeTillOrderEnd);
        }
    }
    getUser() {
        this.currentUser = this.authService.getLoggedUser();
        this.checkUserVote();
        this.getUserSub = this.authService.getAuthUserListner().subscribe((user) => {
            this.currentUser = user;
            this.checkUserVote();
            // this.currentUser.voted = user.lastVoteDate == new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
        });
    }
    checkUserVote() {
        var _a;
        if (this.currentUser) {
            console.log('current before edit', this.currentUser);
            this.currentUser.voted = ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.lastVoteDate) == new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            console.log('current after edit', this.currentUser);
        }
    }
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.getUserSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.updateUserSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.resturantsSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.updateResturantSub) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        if (this.countDownTimer) {
            clearTimeout(this.countDownTimer);
        }
    }
}
PollComponent.ɵfac = function PollComponent_Factory(t) { return new (t || PollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_2__["ResturantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
PollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PollComponent, selectors: [["app-poll"]], decls: 1, vars: 1, consts: [["class", "row justify-content-center poll", 4, "ngIf"], [1, "row", "justify-content-center", "poll"], [1, "col-12"], ["class", "poll-vote", 4, "ngIf"], [3, "endTime"], [1, "poll-list"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", "poll-submit", 3, "disabled", "click"], [1, "poll-vote"], [3, "ngClass", "click"]], template: function PollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PollComponent_div_0_Template, 9, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPoll);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_6__["CountDownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".poll-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: var(--main-secondary-500);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0oiLCJmaWxlIjoicG9sbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2xsLWxpc3QgbGkuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1zZWNvbmRhcnktNTAwKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "M9Lh":
/*!***************************************!*\
  !*** ./src/app/home/client.module.ts ***!
  \***************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-routing.module */ "pa1t");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "Zk3q");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components_poll_poll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/poll/poll.component */ "HDx1");
/* harmony import */ var _components_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/count-down/count-down.component */ "Sd7v");
/* harmony import */ var _components_today_resturant_details_today_resturant_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/today-resturant-details/today-resturant-details.component */ "PohW");
/* harmony import */ var _components_resturant_menu_resturant_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/resturant-menu/resturant-menu.component */ "vI0U");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cart/cart.component */ "YPu7");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "cvl/");
/* harmony import */ var _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/wallet/wallet.component */ "9aj6");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "UQUS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class ClientModule {
}
ClientModule.ɵfac = function ClientModule_Factory(t) { return new (t || ClientModule)(); };
ClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ClientModule });
ClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _client_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ClientModule, { declarations: [_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
        _components_poll_poll_component__WEBPACK_IMPORTED_MODULE_4__["PollComponent"],
        _components_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_5__["CountDownComponent"],
        _components_today_resturant_details_today_resturant_details_component__WEBPACK_IMPORTED_MODULE_6__["TodayResturantDetailsComponent"],
        _components_resturant_menu_resturant_menu_component__WEBPACK_IMPORTED_MODULE_7__["ResturantMenuComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__["WalletComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _client_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "PohW":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/components/today-resturant-details/today-resturant-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TodayResturantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayResturantDetailsComponent", function() { return TodayResturantDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/resturants.service */ "/kEZ");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/menu.service */ "c5gl");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/order.service */ "NuUg");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/home.service */ "jfpu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../count-down/count-down.component */ "Sd7v");









function TodayResturantDetailsComponent_div_0_tr_17_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodayResturantDetailsComponent_div_0_tr_17_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.decreseOrderCount(menuItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodayResturantDetailsComponent_div_0_tr_17_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodayResturantDetailsComponent_div_0_tr_17_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.increaseOrderCount(menuItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodayResturantDetailsComponent_div_0_tr_17_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodayResturantDetailsComponent_div_0_tr_17_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.decreseOrderCount(menuItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodayResturantDetailsComponent_div_0_tr_17_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r2 == null ? null : menuItem_r2.count);
} }
function TodayResturantDetailsComponent_div_0_tr_17_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodayResturantDetailsComponent_div_0_tr_17_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.increaseOrderCount(menuItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodayResturantDetailsComponent_div_0_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TodayResturantDetailsComponent_div_0_tr_17_button_8_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodayResturantDetailsComponent_div_0_tr_17_i_9_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TodayResturantDetailsComponent_div_0_tr_17_i_10_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TodayResturantDetailsComponent_div_0_tr_17_span_11_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TodayResturantDetailsComponent_div_0_tr_17_button_12_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r2 == null ? null : menuItem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r2 == null ? null : menuItem_r2.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (menuItem_r2 == null ? null : menuItem_r2.count) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r2.count == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r2.count == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (menuItem_r2 == null ? null : menuItem_r2.count) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (menuItem_r2 == null ? null : menuItem_r2.count) > 0 && (menuItem_r2 == null ? null : menuItem_r2.count) < 4);
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
function TodayResturantDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Restaurant of the Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add your order to cart before");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-count-down", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TodayResturantDetailsComponent_div_0_tr_17_Template, 13, 7, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodayResturantDetailsComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addOrderToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.disableTodayResturant ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.todayResturant == null ? null : ctx_r0.todayResturant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("endTime", ctx_r0.orderEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.todayResturantMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.order.items.length <= 0);
} }
class TodayResturantDetailsComponent {
    constructor(resturantsService, menuService, orderService, authService, homeService, router) {
        this.resturantsService = resturantsService;
        this.menuService = menuService;
        this.orderService = orderService;
        this.authService = authService;
        this.homeService = homeService;
        this.router = router;
        this.orderEndTime = [23, 50, 0];
        this.order = {
            userId: '',
            resturantId: '',
            items: [],
            totalOrderPrice: 0,
        };
        this.showResturantDetails = false;
    }
    ngOnInit() {
        this.getTodayResturant();
        this.showHideDependOnCountDown();
        this.homeService.getDisableResturantDetails().subscribe(disableOrdering => {
            console.log(disableOrdering);
            this.disableTodayResturant = disableOrdering;
        });
    }
    getMenu() {
        var _a;
        this.menuService.getMenu((_a = this.todayResturant) === null || _a === void 0 ? void 0 : _a._id).subscribe((menu) => {
            menu.menu.forEach((menuItem) => {
                menuItem.count = 0;
            });
            let jsonOrder = localStorage.getItem('order');
            if (jsonOrder) {
                const localOrder = JSON.parse(jsonOrder);
                menu.menu = menu.menu.filter((menuItem) => {
                    return this.getIndex(localOrder.items, menuItem._id) < 0;
                });
                menu.menu = [...localOrder.items, ...menu.menu];
            }
            this.todayResturantMenu = menu.menu;
            this.getTodayOrder();
        });
    }
    getIndex(arr, id) {
        return arr.findIndex((object) => {
            return object._id === id;
        });
    }
    getTodayResturant() {
        this.resturantsService.getTodayResturant().subscribe(todayResturant => {
            this.todayResturant = todayResturant;
            this.getMenu();
        });
    }
    showHideDependOnCountDown() {
        const timeTillOrderEnd = this.homeService.calcDateDiffInMs(this.orderEndTime);
        if (timeTillOrderEnd > 0) {
            this.showResturantDetails = true;
            this.countDownTimer = setTimeout(() => {
                this.resetTodayResturant();
            }, timeTillOrderEnd);
        }
        else {
            this.resetTodayResturant();
        }
    }
    addOrderToCart() {
        this.getTodayOrder();
        localStorage.setItem('order', JSON.stringify(this.order));
        this.router.navigate(['home/cart']);
    }
    getTodayOrder() {
        this.order.items = this.todayResturantMenu.filter((menuItem) => menuItem.count > 0);
    }
    resetTodayResturant() {
        this.showResturantDetails = false;
        this.homeService.disableResturantDetails.next(true);
        localStorage.removeItem('order');
    }
    ngOnDestroy() {
        if (this.countDownTimer) {
            clearTimeout(this.countDownTimer);
        }
    }
    decreseOrderCount(menuItem) {
        menuItem.count -= 1;
        this.getTodayOrder();
    }
    increaseOrderCount(menuItem) {
        menuItem.count += 1;
        this.getTodayOrder();
    }
}
TodayResturantDetailsComponent.ɵfac = function TodayResturantDetailsComponent_Factory(t) { return new (t || TodayResturantDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_1__["ResturantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TodayResturantDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodayResturantDetailsComponent, selectors: [["app-today-resturant-details"]], decls: 1, vars: 1, consts: [[3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "today-resturant", "row"], [1, "col-auto", "resturant-welcome"], [1, "col", "text-center", "resturant-brand"], [1, "poll-vote"], [3, "endTime"], [1, "menu-table"], [1, "menu-table-head"], ["class", "menu-table-items", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], [1, "menu-table-items"], [1, "menu-table-items-price"], [1, "menu-table-items-price-unit"], ["class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["class", "fas text-main fa-shopping-cart", 3, "click", 4, "ngIf"], ["class", "fas text-main-danger fa-trash", 3, "click", 4, "ngIf"], ["class", "cart-count", 4, "ngIf"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "fas", "text-main", "fa-shopping-cart", 3, "click"], [1, "fas", "text-main-danger", "fa-trash", 3, "click"], [1, "cart-count"]], template: function TodayResturantDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodayResturantDetailsComponent_div_0_Template, 22, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResturantDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_8__["CountDownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".today-resturant[_ngcontent-%COMP%] {\n  color: #435971;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n}\n.today-resturant[_ngcontent-%COMP%]   .resturant-welcome[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  line-height: 2.9rem;\n}\n.today-resturant[_ngcontent-%COMP%]   .resturant-brand[_ngcontent-%COMP%] {\n  font-size: 3.428rem;\n  line-height: 4.46rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9kYXktcmVzdHVyYW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBRUoiLCJmaWxlIjoidG9kYXktcmVzdHVyYW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kYXktcmVzdHVyYW50IHtcclxuICBjb2xvcjojNDM1OTcxO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5yZXN0dXJhbnQtd2VsY29tZSB7XHJcbiAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjlyZW07XHJcbiAgfVxyXG4gIC5yZXN0dXJhbnQtYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAzLjQyOHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0LjQ2cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sd7v":
/*!********************************************************************!*\
  !*** ./src/app/home/components/count-down/count-down.component.ts ***!
  \********************************************************************/
/*! exports provided: CountDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponent", function() { return CountDownComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home.service */ "jfpu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CountDownComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r1.hoursToDday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r1.minutesToDday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r1.secondsToDday);
} }
class CountDownComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.timeLeft$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => this.homeService.calcDateDiff(this.endTime)));
    }
    ngOnInit() {
    }
}
CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"])); };
CountDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CountDownComponent, selectors: [["app-count-down"]], inputs: { endTime: "endTime" }, decls: 2, vars: 3, consts: [["class", "text-center", 4, "ngIf"], [1, "text-center"], [1, "poll-timer"]], template: function CountDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CountDownComponent_p_0_Template, 7, 3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.timeLeft$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UQUS":
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home.service */ "jfpu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../poll/poll.component */ "HDx1");
/* harmony import */ var _today_resturant_details_today_resturant_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../today-resturant-details/today-resturant-details.component */ "PohW");





function HomeComponent_app_poll_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-poll");
} }
function HomeComponent_app_today_resturant_details_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-today-resturant-details");
} }
class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
        // showPollSub: Subscription;
        // showPoll: boolean = false;
        this.showOrder = true;
        this.showPoll = true;
    }
    ngOnInit() {
        // this.showPollSub = this.homeService.showPoll.subscribe(showPoll => {
        //   console.log('show Poll: ', showPoll);
        //   this.showPoll = showPoll;
        // })
        this.showOrder = this.calcDiff('orderEndTime');
        this.showPoll = this.calcDiff('pollEndTime');
    }
    ngOnDestroy() {
        // this.showPollSub.unsubscribe();
    }
    calcDiff(localName) {
        const jsonEndTime = localStorage.getItem(localName);
        console.log(jsonEndTime);
        if (jsonEndTime) {
            const endTime = JSON.parse(jsonEndTime);
            const timeRemaining = this.homeService.calcDateDiff(endTime);
            if (timeRemaining.secondsToDday == '00' && timeRemaining.minutesToDday == '00' && timeRemaining.hoursToDday == '00') {
                return false;
            }
            else {
                return true;
            }
        }
        return true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "home"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_poll_1_Template, 1, 0, "app-poll", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_today_resturant_details_2_Template, 1, 0, "app-today-resturant-details", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPoll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOrder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__["PollComponent"], _today_resturant_details_today_resturant_details_component__WEBPACK_IMPORTED_MODULE_4__["TodayResturantDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "YPu7":
/*!********************************************************!*\
  !*** ./src/app/home/components/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/order.service */ "NuUg");
/* harmony import */ var src_app_shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/resturants.service */ "/kEZ");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "jfpu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CartComponent_tr_13_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_13_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.decreseOrderCount(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_tr_13_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_13_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.increaseOrderCount(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_tr_13_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_13_i_12_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.decreseOrderCount(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_tr_13_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.count);
} }
function CartComponent_tr_13_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_13_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.increaseOrderCount(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_tr_13_button_8_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartComponent_tr_13_i_10_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_tr_13_i_12_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_tr_13_span_13_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_tr_13_button_14_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r1 == null ? null : item_r1.count) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.count == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.count == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r1 == null ? null : item_r1.count) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r1 == null ? null : item_r1.count) > 0 && (item_r1 == null ? null : item_r1.count) < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.price * item_r1.count, " ");
} }
class CartComponent {
    constructor(orderService, resturantsService, authService, homeService) {
        this.orderService = orderService;
        this.resturantsService = resturantsService;
        this.authService = authService;
        this.homeService = homeService;
    }
    ngOnInit() {
        this.getCurrentOrder();
    }
    getCurrentOrder() {
        let jsonOrder = localStorage.getItem('order');
        if (jsonOrder) {
            this.order = JSON.parse(jsonOrder);
            this.order.totalOrderPrice = this.getTotalOrderPrice();
            this.order.grandTotal = this.getTotalOrderPrice();
        }
    }
    increaseOrderCount(menuItem) {
        menuItem.count += 1;
        this.editCartItems();
    }
    decreseOrderCount(menuItem) {
        menuItem.count -= 1;
        this.editCartItems();
    }
    editCartItems() {
        this.order.items = this.order.items.filter((item) => item.count > 0);
        localStorage.setItem('order', JSON.stringify(this.order));
        this.order.totalOrderPrice = this.getTotalOrderPrice();
        this.order.grandTotal = this.getTotalOrderPrice();
    }
    submitOrder() {
        var _a, _b;
        if (!this.order) {
            this.order = {};
            this.order.items = [];
        }
        const itemsToAdd = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.map((item) => ({ item: { _id: item._id, name: item.name, price: item.price, resturantId: item.resturantId }, count: item.count }));
        let orderToAdd = Object.assign({}, this.order);
        orderToAdd.items = itemsToAdd;
        console.log(this.order);
        this.setUserAndResturantToOrder(orderToAdd);
    }
    addOrder(orderToAdd) {
        console.log(orderToAdd);
        this.orderService.addOrder(orderToAdd).subscribe(addedOrder => {
            console.log(addedOrder);
            localStorage.removeItem('order');
            this.order.items = [];
            this.homeService.disableResturantDetails.next(true);
        }, err => {
            console.log(err);
        });
    }
    setUserAndResturantToOrder(orderToAdd) {
        console.log(orderToAdd);
        this.resturantsService.getTodayResturant().subscribe(todayResturant => {
            console.log(todayResturant);
            orderToAdd.resturantId = todayResturant._id;
            this.authService.getLoggedUser();
            orderToAdd.userId = this.authService.getLoggedUser()._id;
            this.addOrder(orderToAdd);
        });
    }
    getTotalOrderPrice() {
        var _a, _b;
        let total = 0;
        if (((_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            return this.order.items.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.count), total);
        }
        else {
            return 0;
        }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_resturants_service__WEBPACK_IMPORTED_MODULE_2__["ResturantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 25, vars: 3, consts: [[1, "flash-message-main"], [1, "m-0"], [1, "menu-table"], [1, "menu-table-head"], ["class", "menu-table-items", 4, "ngFor", "ngForOf"], [1, "menu-table-items"], ["colspan", "3"], [1, "menu-table-items-price"], [1, "menu-table-items-price-unit"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], ["class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["class", "fas text-primary fa-shopping-cart", 3, "click", 4, "ngIf"], ["class", "fas text-main-danger fa-trash", 3, "click", 4, "ngIf"], ["class", "cart-count", 4, "ngIf"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "fas", "text-primary", "fa-shopping-cart", 3, "click"], [1, "fas", "text-main-danger", "fa-trash", 3, "click"], [1, "cart-count"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thanks, Your order has submitted successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_tr_13_Template, 19, 8, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Price Without Taxes Or Delivery Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "EGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_23_listener() { return ctx.submitOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order == null ? null : ctx.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getTotalOrderPrice(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.order == null ? null : ctx.order.items == null ? null : ctx.order.items.length) <= 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Zk3q":
/*!******************************************!*\
  !*** ./src/app/home/client.component.ts ***!
  \******************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/home.service */ "jfpu");
/* harmony import */ var _shared_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/aside/aside.component */ "7/bn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ClientComponent {
    constructor(homeService) {
        this.homeService = homeService;
        // showPollSub: Subscription;
        // showPoll: boolean = false;
        this.showOrder = true;
        this.showPoll = true;
    }
    ngOnInit() {
        // this.showPollSub = this.homeService.showPoll.subscribe(showPoll => {
        //   console.log('show Poll: ', showPoll);
        //   this.showPoll = showPoll;
        // })
        this.showOrder = this.calcDiff('orderEndTime');
        this.showPoll = this.calcDiff('pollEndTime');
    }
    ngOnDestroy() {
        // this.showPollSub.unsubscribe();
    }
    calcDiff(localName) {
        const jsonEndTime = localStorage.getItem(localName);
        console.log(jsonEndTime);
        if (jsonEndTime) {
            const endTime = JSON.parse(jsonEndTime);
            const timeRemaining = this.homeService.calcDateDiff(endTime);
            if (timeRemaining.secondsToDday == '00' && timeRemaining.minutesToDday == '00' && timeRemaining.hoursToDday == '00') {
                return false;
            }
            else {
                return true;
            }
        }
        return true;
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-3"], [1, "col-9", "py-4"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "cvl/":
/*!**************************************************************!*\
  !*** ./src/app/home/components/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/order.service */ "NuUg");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_no_data_found_no_data_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/no-data-found/no-data-found.component */ "E9u9");





function ProfileComponent_div_4_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r7 == null ? null : item_r7.count, "\u00D7 ", item_r7 == null ? null : item_r7.item == null ? null : item_r7.item.name, "");
} }
function ProfileComponent_div_4_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reorder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_4_div_1_p_5_Template, 2, 2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_4_div_1_button_8_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4 == null ? null : order_r4.resturantId == null ? null : order_r4.resturantId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r4 == null ? null : order_r4.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Order Price: ", order_r4 == null ? null : order_r4.totalOrderPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (order_r4 == null ? null : order_r4.resturantId == null ? null : order_r4.resturantId._id) === ctx_r3.getTodayResturantId());
} }
function ProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_4_div_1_Template, 9, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
function ProfileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-no-data-found", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("msg", "Sorry, No Orders Yet");
} }
class ProfileComponent {
    constructor(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
    }
    ngOnInit() {
        this.loggedUser = this.authService.getLoggedUser();
        this.userListnerSub = this.authService
            .getAuthUserListner()
            .subscribe((user) => {
            this.loggedUser = user;
        });
        this.getuserOrders();
        // this.authService.getAuthUserListner().subscribe((user: any) => {
        //   this.getuserOrders()
        // })
        this.getTodayResturantId();
    }
    getuserOrders() {
        const loggedUserId = localStorage.getItem('loggedUserId');
        if (loggedUserId) {
            this.orderService.getOrdersPerUser(loggedUserId).subscribe(userOrders => {
                console.log(userOrders);
                this.orders = userOrders;
                // const uniqeOrder = new Set(this.orders.items);
                // console.log(this.orders);
            });
        }
    }
    getTodayResturantId() {
        return localStorage.getItem('toDayResturantId');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-12"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noOrdersFound", ""], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "card"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngFor", "ngForOf"], ["href", "#", 1, "btn", "btn-primary"], ["class", "btn btn-primary", 4, "ngIf"], [1, "card-text"], [1, "btn", "btn-primary"], [3, "msg"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.loggedUser == null ? null : ctx.loggedUser.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.orders == null ? null : ctx.orders.length) > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_no_data_found_no_data_found_component__WEBPACK_IMPORTED_MODULE_4__["NoDataFoundComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jfpu":
/*!***********************************************!*\
  !*** ./src/app/home/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeService {
    constructor() {
        this.date = this.calcTime(2);
        this.disableResturantDetails = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    calcDateDiff(endTime = [0, 0, 0]) {
        const milliSecondsInASecond = 1000;
        const hoursInADay = 24;
        const minutesInAnHour = 60;
        const secondsInAMinute = 60;
        const timeDifference = this.calcDateDiffInMs(endTime);
        if (timeDifference > 0) {
            // const daysToDday = Math.floor(
            //   timeDifference /
            //   (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
            // );
            let hoursToDday = Math.floor((timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) % hoursInADay);
            if (hoursToDday < 10) {
                hoursToDday = '0' + hoursToDday;
            }
            let minutesToDday = Math.floor((timeDifference / (milliSecondsInASecond * minutesInAnHour)) % secondsInAMinute);
            if (minutesToDday < 10) {
                minutesToDday = '0' + minutesToDday;
            }
            let secondsToDday = Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
            if (secondsToDday < 10) {
                secondsToDday = '0' + secondsToDday;
            }
            return {
                secondsToDday,
                minutesToDday,
                hoursToDday,
            };
        }
        else {
            // this.showPollSubject.next(false);
            return {
                secondsToDday: '00',
                minutesToDday: '00',
                hoursToDday: '00',
            };
        }
    }
    calcDateDiffInMs(endTime = [0, 0, 0]) {
        const endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), endTime[0], endTime[1], endTime[2]);
        const dDay = endDate.valueOf();
        const timeDifference = dDay - this.calcTime(2).getTime();
        return timeDifference;
    }
    calcTime(offset) {
        // create Date object for current location
        const d = new Date();
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        const nd = new Date(utc + (3600000 * offset));
        // return new adjusted date
        return nd;
    }
    getDisableResturantDetails() {
        return this.disableResturantDetails.asObservable();
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pa1t":
/*!***********************************************!*\
  !*** ./src/app/home/client-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "UQUS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/auth.guards */ "6iKd");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart.component */ "YPu7");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "cvl/");
/* harmony import */ var _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wallet/wallet.component */ "9aj6");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client.component */ "Zk3q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: '', component: _client_component__WEBPACK_IMPORTED_MODULE_6__["ClientComponent"], children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'wallet', component: _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__["WalletComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
        ]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "vI0U":
/*!****************************************************************************!*\
  !*** ./src/app/home/components/resturant-menu/resturant-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResturantMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantMenuComponent", function() { return ResturantMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["app-resturant-menu", ""];
class ResturantMenuComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    getMenuSectionItemsCollection() {
    }
    addItemToCart() {
    }
    decreseCount() {
    }
    increaseCount() {
    }
}
ResturantMenuComponent.ɵfac = function ResturantMenuComponent_Factory(t) { return new (t || ResturantMenuComponent)(); };
ResturantMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResturantMenuComponent, selectors: [["", "app-resturant-menu", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 20, vars: 0, consts: [[1, "menu-table"], [1, "menu-table-head"], [1, "item-name-width"], [1, "item-price-width", "item-price-width--big"], [1, "item-add-to-cart-width"], [1, "menu-table-items"], [1, "item-price-width", "item-price-width--big", "menu-table-items-price"], [1, "menu-table-items-price-unit"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "fas", "fa-shopping-cart"]], template: function ResturantMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u0633\u0639\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0636\u0641 \u0644\u0644\u0639\u0631\u0628\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0645\u0646\u0642\u0648\u0634\u0629 \u062A\u0631\u0643\u064A \u0645\u062F\u062E\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 25 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResturantMenuComponent_Template_button_click_17_listener() { return ctx.addItemToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0dXJhbnQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=home-client-module.js.map