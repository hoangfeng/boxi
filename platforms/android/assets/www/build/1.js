webpackJsonp([1],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRequestSuccessPageModule", function() { return ModalRequestSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_request_success__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalRequestSuccessPageModule = (function () {
    function ModalRequestSuccessPageModule() {
    }
    return ModalRequestSuccessPageModule;
}());
ModalRequestSuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_request_success__["a" /* ModalRequestSuccessPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_request_success__["a" /* ModalRequestSuccessPage */]),
        ],
    })
], ModalRequestSuccessPageModule);

//# sourceMappingURL=modal-request-success.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRequestSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalRequestSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalRequestSuccessPage = (function () {
    function ModalRequestSuccessPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ModalRequestSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalRequestSuccessPage');
    };
    ModalRequestSuccessPage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalRequestSuccessPage.prototype.findShipper = function () {
        var data = 1;
        this.view.dismiss(data);
    };
    return ModalRequestSuccessPage;
}());
ModalRequestSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-request-success',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\modal-request-success\modal-request-success.html"*/'<ion-content padding>\n	<div class="header">\n		<div class="main-img-wrapper">\n			<img src="././assets/img/tick.png" >\n		</div>\n		<div class="text-wrapper">\n			<p id="text-header">Đặt thành công</p>\n			\n		</div>\n	</div>\n	<div class="content">\n		<div class="message">\n			<p>Bạn đặt đơn hàng thành công</p>\n			<p>Tài xế sẽ tới trong vòng 6 phút</p>	\n		</div>\n		\n		<div class="button-div">\n			<div class="cancel-btn" (click)="close()">\n				<p>HỦY BỎ</p>\n			</div>\n			<div class="take-btn" (click)="findShipper()">\n				<p>OK</p>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\modal-request-success\modal-request-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ModalRequestSuccessPage);

//# sourceMappingURL=modal-request-success.js.map

/***/ })

});
//# sourceMappingURL=1.js.map