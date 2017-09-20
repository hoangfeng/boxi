webpackJsonp([3],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDiscountPageModule", function() { return ModalDiscountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_discount__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDiscountPageModule = (function () {
    function ModalDiscountPageModule() {
    }
    return ModalDiscountPageModule;
}());
ModalDiscountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_discount__["a" /* ModalDiscountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_discount__["a" /* ModalDiscountPage */]),
        ],
    })
], ModalDiscountPageModule);

//# sourceMappingURL=modal-discount.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDiscountPage; });
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
 * Generated class for the ModalDiscountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalDiscountPage = (function () {
    function ModalDiscountPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ModalDiscountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalDiscountPage');
    };
    ModalDiscountPage.prototype.close = function () {
        this.view.dismiss();
    };
    return ModalDiscountPage;
}());
ModalDiscountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-discount',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\modal-discount\modal-discount.html"*/'\n\n\n<ion-content padding>\n	<div class="header">\n		<div class="main-img-wrapper">\n			<img src="././assets/img/discount-black.png" >\n		</div>\n		<div class="text-wrapper">\n			<p id="text-header">Mã Khuyến Mãi</p>\n			<p id="weight">Nhập code ở đây</p>\n		</div>\n	</div>\n	<div class="content">\n		<ion-input type="tel"></ion-input>\n		<div class="button-div">\n			<div class="cancel-btn" (click)="close()">\n				<p>HỦY BỎ</p>\n			</div>\n			<div class="take-btn" (click)="close()">\n				<p>XÁC NHẬN</p>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\modal-discount\modal-discount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ModalDiscountPage);

//# sourceMappingURL=modal-discount.js.map

/***/ })

});
//# sourceMappingURL=3.js.map