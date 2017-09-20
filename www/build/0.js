webpackJsonp([0],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWhyPageModule", function() { return ModalWhyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_why__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalWhyPageModule = (function () {
    function ModalWhyPageModule() {
    }
    return ModalWhyPageModule;
}());
ModalWhyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_why__["a" /* ModalWhyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_why__["a" /* ModalWhyPage */]),
        ],
    })
], ModalWhyPageModule);

//# sourceMappingURL=modal-why.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWhyPage; });
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
 * Generated class for the ModalWhyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalWhyPage = (function () {
    function ModalWhyPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ModalWhyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalWhyPage');
    };
    ModalWhyPage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalWhyPage.prototype.confirm = function () {
        var data = 1;
        this.view.dismiss(data);
    };
    ModalWhyPage.prototype.chooseMethod = function (id) {
        document.getElementById("i1").style.display = "none";
        document.getElementById("i2").style.display = "none";
        document.getElementById("i3").style.display = "none";
        document.getElementById("i4").style.display = "none";
        document.getElementById("i5").style.display = "none";
        document.getElementById("i6").style.display = "none";
        document.getElementById("i7").style.display = "none";
        document.getElementById("i8").style.display = "none";
        document.getElementById("i9").style.display = "none";
        document.getElementById(id).style.display = "block";
    };
    return ModalWhyPage;
}());
ModalWhyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-why',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\modal-why\modal-why.html"*/'<ion-content padding>\n	<div class="header">\n		\n		<div class="text-wrapper">\n			<p id="text-header">Lý do hủy bỏ</p>			\n		</div>\n	</div>\n	<div class="content">\n		<div class="message">\n			<ul>\n				<li (click)="chooseMethod(\'i1\')">\n					<p class="item-name">Hàng hóa bị mất mát</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i1" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i2\')">\n					<p class="item-name">Trường hợp khẩn cấp</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i2" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i3\')">\n					<p class="item-name">Trục trặc tuyến đường</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i3" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i4\')">\n					<p class="item-name">Phản hồi từ lái xe</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i4" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i5\')">\n					<p class="item-name">Phản hồi từ khách hàng</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i5" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i6\')">\n					<p class="item-name">Biên lai thanh toán</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i6" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i7\')">\n					<p class="item-name">Khuyến mại</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i7" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i8\')">\n					<p class="item-name">Sự cố trục trặc tai nạn</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i8" >\n					</div>\n				</li>\n				<li (click)="chooseMethod(\'i9\')">\n					<p class="item-name">Phương thức thanh toán</p>\n					<div class="method-status">\n						<img src="././assets/img/tick.png" id="i9" >\n					</div>\n				</li>\n			\n			</ul>\n		</div>\n		\n		<div class="button-div">\n			<div class="cancel-btn" (click)="close()">\n				<p>HỦY BỎ</p>\n			</div>\n			<div class="take-btn" (click)="confirm()">\n				<p>XONG</p>\n			</div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\modal-why\modal-why.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ModalWhyPage);

//# sourceMappingURL=modal-why.js.map

/***/ })

});
//# sourceMappingURL=0.js.map