webpackJsonp([4],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCancelPageModule", function() { return ModalCancelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_cancel__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCancelPageModule = (function () {
    function ModalCancelPageModule() {
    }
    return ModalCancelPageModule;
}());
ModalCancelPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_cancel__["a" /* ModalCancelPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_cancel__["a" /* ModalCancelPage */]),
        ],
    })
], ModalCancelPageModule);

//# sourceMappingURL=modal-cancel.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCancelPage; });
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
 * Generated class for the ModalCancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCancelPage = (function () {
    function ModalCancelPage(navCtrl, navParams, view, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
    }
    ModalCancelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalCancelPage');
    };
    ModalCancelPage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalCancelPage.prototype.confirm = function () {
        var data = 1;
        this.view.dismiss(data);
    };
    return ModalCancelPage;
}());
ModalCancelPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-cancel',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\modal-cancel\modal-cancel.html"*/'<ion-content padding>\n	<div class="header">\n		<div class="main-img-wrapper">\n			<img src="././assets/img/tick.png" >\n		</div>\n		<div class="text-wrapper">\n			<p id="text-header">Hủy bỏ đơn hàng</p>\n			\n		</div>\n	</div>\n	<div class="content">\n		<div class="message">\n			<p>Bạn có muốn hủy bỏ đơn hàng không ?</p>\n			<p></p>	\n		</div>\n		\n		<div class="button-div">\n			<div class="cancel-btn" (click)="close()">\n				<p>KHÔNG</p>\n			</div>\n			<div class="take-btn" (click)="confirm()">\n				<p>CÓ</p>\n			</div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\modal-cancel\modal-cancel.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ModalCancelPage);

//# sourceMappingURL=modal-cancel.js.map

/***/ })

});
//# sourceMappingURL=4.js.map