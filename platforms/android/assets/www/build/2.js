webpackJsonp([2],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEstimatePageModule", function() { return ModalEstimatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_estimate__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalEstimatePageModule = (function () {
    function ModalEstimatePageModule() {
    }
    return ModalEstimatePageModule;
}());
ModalEstimatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_estimate__["a" /* ModalEstimatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_estimate__["a" /* ModalEstimatePage */]),
        ],
    })
], ModalEstimatePageModule);

//# sourceMappingURL=modal-estimate.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEstimatePage; });
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
 * Generated class for the ModalEstimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalEstimatePage = (function () {
    function ModalEstimatePage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ModalEstimatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalEstimatePage');
    };
    ModalEstimatePage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalEstimatePage.prototype.showDetail = function () {
        var data = 1;
        this.view.dismiss(data);
    };
    return ModalEstimatePage;
}());
ModalEstimatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-estimate',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\modal-estimate\modal-estimate.html"*/'\n<ion-content padding>\n	<div class="header">\n		<div class="main-img-wrapper">\n			<img src="././assets/img/scooter.png" >\n		</div>\n		<div class="text-wrapper">\n			<p id="text-header">Thông tin ước tính</p>\n			<p id="weight">1.5 kG</p>\n		</div>\n	</div>\n	<div class="content">\n		<img src="././assets/img/estimate.png" >\n		<div class="button-div">\n			<div class="cancel-btn" (click)="close()">\n				<p>HỦY</p>\n			</div>\n			<div class="take-btn" (click)="showDetail()">\n				<p>NHẬN ƯỚC TÍNH</p>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\modal-estimate\modal-estimate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ModalEstimatePage);

//# sourceMappingURL=modal-estimate.js.map

/***/ })

});
//# sourceMappingURL=2.js.map