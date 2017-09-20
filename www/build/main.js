webpackJsonp([25],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
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
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
    };
    PersonalInfoPage.prototype.backToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return PersonalInfoPage;
}());
PersonalInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal-info',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\personal-info\personal-info.html"*/'<!--\n  Generated template for the PersonalInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >Thông tin cá nhân</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="orSymboi">\n		<img src="././assets/img/personal-main-photo.png" >\n	</div>\n	<div class="scroll-layout" padding>\n		<ion-list>\n			<div class="div-half-size">\n				<div class="half-size-item">\n					<ion-label fixed class="half-size">Tên</ion-label>\n					<ion-item class="half-size">\n						<ion-input type="text"></ion-input>\n					</ion-item>\n				</div>\n				<div class="half-size-item second-half">\n					<ion-label fixed class="half-size">Họ</ion-label>\n					<ion-item class="half-size">\n						<ion-input type="text"></ion-input>\n					</ion-item>\n				</div>\n			</div>\n			<ion-label fixed>Email</ion-label>\n			<ion-item>\n				<ion-input type="email"></ion-input>\n			</ion-item>\n\n			<div class="div-quarter-size">\n				<ion-label fixed >Số Điện Thoại</ion-label>\n				<div class="quater-share">\n					<ion-item class="quarter-size">\n						<ion-input type="tel" maxlength="3"></ion-input>\n					</ion-item>	\n					<ion-item class="three-quarter-size">\n						<ion-input type="tel"></ion-input>\n					</ion-item>\n				</div>\n			</div>\n\n			<p class="seperator-text">ĐỊA CHỈ</p>\n			<hr class="seperator-line"/>\n\n			<div class="address-detail">\n				<div class="address-detail-item">\n					<ion-icon name="home" item-left></ion-icon>\n					<div class="item-label-input">						\n						<ion-item>			\n							<ion-input placeholder="Nhà" type="text"></ion-input>\n						</ion-item>\n					</div>									\n				</div>\n				<div class="address-detail-item">\n					<ion-icon name="briefcase" item-left></ion-icon>\n					<div class="item-label-input">						\n						<ion-item>			\n							<ion-input placeholder="Nơi làm việc" type="text"></ion-input>\n						</ion-item>\n					</div>\n				</div>\n			</div>\n		</ion-list>\n\n		<div class="logInBtnDiv" (click)="backToHome()">\n			<img src="././assets/img/doneBtn.png" >\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\personal-info\personal-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PersonalInfoPage);

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
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
 * Generated class for the ConfirmPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPhoneNumberPage = (function () {
    function ConfirmPhoneNumberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPhoneNumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPhoneNumberPage');
    };
    ConfirmPhoneNumberPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return ConfirmPhoneNumberPage;
}());
ConfirmPhoneNumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirm-phone-number',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\confirm-phone-number\confirm-phone-number.html"*/'<!--\n  Generated template for the ConfirmPhoneNumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Mã xác nhận điện thoại</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="symbol-main">\n		<img src="././assets/img/confirm-phone-main-photo.png" >\n	</div>\n\n	<ion-list>\n		<ion-label fixed>Enter OTP</ion-label>\n		<ion-item>\n			<ion-input type="text"></ion-input>\n		</ion-item>		\n	</ion-list>	\n</ion-content>\n\n<div class="logInBtnDiv" (click)="goBack()">\n	<div class="button-text">\n		<p>XÁC NHẬN</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\confirm-phone-number\confirm-phone-number.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ConfirmPhoneNumberPage);

//# sourceMappingURL=confirm-phone-number.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_up_phone_number_set_up_phone_number__ = __webpack_require__(54);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__set_up_phone_number_set_up_phone_number__["a" /* SetUpPhoneNumberPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >Đăng Kí</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div padding class="outDiv">\n		<div class="inDiv">\n			<button>\n				<img src="././assets/img/googleBtn.png"  style="border: 1px solid rgb(223,74,50);" >\n			</button>		    \n			<button>\n				<img src="././assets/img/facebookBtn.png" style="border: 1px solid rgb(59,89,153);" >\n			</button>\n		</div>\n	</div>\n	<div class="orSymboi">\n		<img src="././assets/img/orSym.png" >\n	</div>\n\n	<ion-list>\n		<div class="div-half-size">\n			<div class="half-size-item">\n				<ion-label fixed class="half-size">Họ</ion-label>\n				<ion-item class="half-size">\n					<ion-input type="text"></ion-input>\n				</ion-item>\n			</div>\n			<div class="half-size-item second-half">\n				<ion-label fixed class="half-size">Tên</ion-label>\n				<ion-item class="half-size">\n					<ion-input type="text"></ion-input>\n				</ion-item>\n			</div>\n		</div>\n		<ion-label fixed>Email</ion-label>\n		<ion-item>\n			<ion-input type="email"></ion-input>\n		</ion-item>\n\n		<div class="div-quarter-size">\n			<ion-label fixed >Số Điện Thoại</ion-label>\n			<div class="quater-share">\n				<ion-item class="quarter-size">\n					<ion-input type="tel" maxlength="3"></ion-input>\n				</ion-item>	\n				<ion-item class="three-quarter-size">\n					<ion-input type="tel"></ion-input>\n				</ion-item>\n			</div>\n		</div>\n\n		<ion-label fixed>Mật Khẩu</ion-label>\n		<ion-item>			\n			<ion-input type="password"></ion-input>\n		</ion-item>\n	</ion-list>\n\n	<div class="logInBtnDiv" (click)="signup()">\n		<img src="././assets/img/doneBtn.png" >\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
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
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\forgot\forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Quên mật khẩu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="symbol-main">\n		<img src="././assets/img/forgot_main_photo.png" >\n	</div>\n\n	<ion-list>\n		<ion-label fixed>Số Điện Thoại Hoặc Mail</ion-label>\n		<ion-item>\n			<ion-input type="text"></ion-input>\n		</ion-item>		\n	</ion-list>\n\n	\n</ion-content>\n<div class="logInBtnDiv" (click)="goBack()">\n	<div class="button-text">\n		<p>THIẾT LẬP MẬT KHẨU</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_up_phone_number_set_up_phone_number__ = __webpack_require__(54);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__set_up_phone_number_set_up_phone_number__["a" /* SetUpPhoneNumberPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >Đăng nhập</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div padding class="outDiv">\n		<div class="inDiv">\n			<button>\n				<img src="././assets/img/googleBtn.png"  style="border: 1px solid rgb(223,74,50);" >\n			</button>		    \n			<button>\n				<img src="././assets/img/facebookBtn.png" style="border: 1px solid rgb(59,89,153);" >\n			</button>\n		</div>\n	</div>\n	<div class="orSymboi">\n		<img src="././assets/img/orSym.png" >\n	</div>\n\n	<ion-list>\n		<ion-label fixed>Số Điện Thoại Hoặc Mail</ion-label>\n		<ion-item>\n			<ion-input type="text"></ion-input>\n		</ion-item>\n		<ion-label fixed>Mật Khẩu</ion-label>\n		<ion-item>			\n			<ion-input type="password"></ion-input>\n		</ion-item>\n	</ion-list>\n\n	<div class="logInBtnDiv" (click)="login()">\n		<img src="././assets/img/loginBtn.png" >\n	</div>\n	<div class="forgot" (click)="forgot()">\n		Quên Mật Khẩu?\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(111);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\welcome\welcome.html"*/'\n\n<ion-content padding>\n	<img src="assets/img/navigate.jpg" alt="welcome">\n	<div padding class="outDiv">\n		<div class="inDiv">\n		    <button ion-button color="whiteBtn" (click)="login()">\n			 	Đăng Nhập\n			</button>\n			<button ion-button color="blackBtn" (click)="signup()">\n			  Đăng Kí\n			</button>\n	</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
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
 * Generated class for the PaymentInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentInputPage = (function () {
    function PaymentInputPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentInputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentInputPage');
    };
    PaymentInputPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return PaymentInputPage;
}());
PaymentInputPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-input',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\payment-input\payment-input.html"*/'<!--\n  Generated template for the PaymentInputPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Nhập thanh toán tín dụng</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="symbol-main">\n		<img src="././assets/img/card.png" >\n	</div>\n\n	<ion-list>\n		<div class="input-card-number">\n			<ion-label fixed>CREDIT CARD NUMBER</ion-label>\n			<ion-item>\n				<ion-input type="tel" value="9999 8888 1012 6969"></ion-input>\n			</ion-item>		\n		</div>\n	</ion-list>	\n</ion-content>\n\n<div class="logInBtnDiv" (click)="goBack()">\n	<div class="button-text">\n		<p>XÁC NHẬN</p>\n	</div>			\n</div>	\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\payment-input\payment-input.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PaymentInputPage);

//# sourceMappingURL=payment-input.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_input_payment_input__ = __webpack_require__(113);
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
 * Generated class for the PaymentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentInfoPage = (function () {
    function PaymentInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentInfoPage');
    };
    PaymentInfoPage.prototype.paymentInput = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_input_payment_input__["a" /* PaymentInputPage */]);
    };
    PaymentInfoPage.prototype.chooseMethod = function (id) {
        document.getElementById("cash-tick").style.display = "none";
        document.getElementById("debit-tick").style.display = "none";
        document.getElementById("paypal-tick").style.display = "none";
        document.getElementById(id).style.display = "block";
    };
    return PaymentInfoPage;
}());
PaymentInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-info',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\payment-info\payment-info.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Thông tin thanh toán</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n	<ion-list padding>\n		<div class="seperate">\n			<ion-label fixed>MÃ XÁC NHẬN</ion-label>\n			<ion-item>\n				<ion-input type="tel"></ion-input>\n			</ion-item>	\n		</div>\n	\n	</ion-list>\n	<div class="method-choose">\n		<p class="method-header">LỰA CHỌN PHƯƠNG THỨC THANH TOÁN</p>\n\n		<div class="method-wrapper" (click)="chooseMethod(\'paypal-tick\')">\n			<div class="img-wrapper" >\n				<img src="././assets/img/paypal.png" >\n			</div>			\n			<p>Paypal</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="paypal-tick">\n			</div>\n\n		</div>\n		<div class="method-wrapper" (click)="chooseMethod(\'debit-tick\')">\n			<div class="img-wrapper">\n				<img src="././assets/img/credit.png" >\n			</div>			\n			<p>Credit/Debit</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="debit-tick" >\n			</div>\n		</div>\n\n		<div class="method-wrapper" (click)="chooseMethod(\'cash-tick\')">\n			<div class="img-wrapper">\n				<img src="././assets/img/cash.png" >\n			</div>			\n			<p>Cash</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="cash-tick">\n			</div>\n\n		</div>\n\n\n		<div class="logInBtnDiv" padding (click)="paymentInput()">\n			<img src="././assets/img/doneBtn.png" >\n		</div>\n		\n	</div>\n	\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\payment-info\payment-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PaymentInfoPage);

//# sourceMappingURL=payment-info.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__death_end_death_end__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(31);
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
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OverviewPage = (function () {
    function OverviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OverviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OverviewPage');
    };
    OverviewPage.prototype.end = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    OverviewPage.prototype.help = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__death_end_death_end__["a" /* DeathEndPage */]);
    };
    return OverviewPage;
}());
OverviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-overview',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\overview\overview.html"*/'<!--\n  Generated template for the OverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the DetailInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="suck">\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Xem lại chuyến đi của bạn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="wrapper">\n			<div class="location-picker">\n				<div class="img-wrapper">\n					<img src="././assets/img/route-icon.png" >	\n				</div>\n				\n				<div class="input-location">\n					<input type="text" name="" id="location-start" value="Arena Trúc Khê">\n					<hr/>\n					<input type="text" name="" id="location-end" value="Arena Phạm Văn Bạch">\n				</div>\n			</div>\n		<div class="detail-info">\n			<div class="rating">\n				<div class="star">\n					<img src="././assets/img/star-or.png" >\n					<img src="././assets/img/star-or.png" >	\n					<img src="././assets/img/star-or.png" >	\n					<img src="././assets/img/star-gr.png" >	\n					<img src="././assets/img/star-gr.png" >			\n				</div>				\n			</div>\n			<div class="feedback">\n				<p>Ý KIẾN ĐÁNH GIÁ</p>\n				<input type="text" name="" value="Nhanh chóng an toàn tiện lợi." />\n			</div>\n		</div>\n		<div class="img-wrapper">\n			<img src="././assets/img/request-done.png" >	\n		</div>\n	</div>	\n</ion-content>\n<div class="logInBtnDiv">\n	<div padding class="outDiv">\n		<div class="inDiv">\n		    <button ion-button color="whiteBtn" (click)="help()">\n			 	TRỢ GIÚP ?\n			</button>\n			<button ion-button color="blackBtn" (click)="end()">\n			  KẾT THÚC\n			</button>\n	</div>\n  </div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\overview\overview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], OverviewPage);

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackShipperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(31);
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
 * Generated class for the TrackShipperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackShipperPage = (function () {
    // map: GoogleMap;
    // mapElement: HTMLElement;
    function TrackShipperPage(navCtrl, navParams, googleMaps, platform, geolocation, events, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.events = events;
        this.modal = modal;
        // 	platform.ready().then(()=>{
        // this.loadMap();
        // });
    }
    // ionViewDidLoad() {
    //   this.loadMap();
    // }
    //  loadMap() {
    //    this.mapElement = document.getElementById('map');
    //    let lat_gps =0;
    //    let lon_gps = 0;
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //  // resp.coords.latitude
    //  // resp.coords.longitude
    // }).catch((error) => {
    //  // alert('Error getting location '+ error);
    // });
    //    let mapOptions: GoogleMapOptions = {
    //      camera: {
    //        target: {
    //         lat: 21.036207,
    //         lng: 105.815829
    //        },
    //        zoom: 18,
    //        tilt: 30
    //      }
    //    };
    //    	// lat: 21.036207,
    //     //    lng: 105.815829
    //    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    //    // Wait the MAP_READY before using any methods.
    //    this.map.one(GoogleMapsEvent.MAP_READY)
    //      .then(() => {
    //        console.log('Map is ready!');
    //        // Now you can use all methods safely.
    //        this.map.addMarker({
    //            title: 'Ionic',
    //            icon: 'blue',
    //            animation: 'DROP',
    //            position: {
    //              lat: 43.0741904,
    //              lng: -89.3809802
    //            }
    //          })
    //          .then(marker => {
    //            marker.on(GoogleMapsEvent.MARKER_CLICK)
    //              .subscribe(() => {
    //                alert('clicked');
    //              });
    //          });
    //      });
    //      this.events.subscribe('menu:opened', () => {
    //          this.map.setClickable( false );
    //      });
    //      this.events.subscribe('menu:closed', () => {
    //          this.map.setClickable( true );
    //      });
    //  }
    TrackShipperPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__overview_overview__["a" /* OverviewPage */]);
    };
    TrackShipperPage.prototype.cancel = function () {
        var _this = this;
        var opt = {
            enableBackdropDismiss: true
        };
        var cancelModal = this.modal.create('ModalCancelPage', null, opt);
        cancelModal.present();
        cancelModal.onDidDismiss(function (data) {
            if (data == 1) {
                var whyModal = _this.modal.create('ModalWhyPage', null, opt);
                whyModal.present();
                whyModal.onDidDismiss(function (data) {
                    if (data == 1) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                });
            }
        });
    };
    return TrackShipperPage;
}());
TrackShipperPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-track-shipper',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\track-shipper\track-shipper.html"*/'<ion-header class="suck">\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n	<ion-title>Lựa chọn người vận chuyển</ion-title>    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <iframe width="100%" height="100%" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBeXA39qGwy6N794UVLEvu2azYTA3zU_Vg&center=21.036207,105.815829&zoom=16&maptype=roadmap" allowfullscreen=""></iframe>\n  \n  \n  <div class="box-tranform">\n 		\n  </div>\n  <div padding class="outDiv">\n	<div class="inDiv">\n	    <button ion-button color="blackBtn" (click)="skip()" class="left-btn">\n		 	SKIP >>\n		</button>\n		<button ion-button color="blackBtn" (click)="cancel()" class="right-btn">\n		  HỦY BỎ\n		</button>\n	</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\track-shipper\track-shipper.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], TrackShipperPage);

//# sourceMappingURL=track-shipper.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindShipperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_shipper_track_shipper__ = __webpack_require__(116);
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
 * Generated class for the FindShipperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindShipperPage = (function () {
    function FindShipperPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindShipperPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindShipperPage');
    };
    FindShipperPage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__track_shipper_track_shipper__["a" /* TrackShipperPage */]);
    };
    return FindShipperPage;
}());
FindShipperPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-shipper',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\find-shipper\find-shipper.html"*/'<!--\n  Generated template for the FindShipperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the DetailInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="suck">\n\n  <ion-navbar class="suck">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Tìm Tài Xế</ion-title>\n  </ion-navbar>\n  <div class="header-extend">\n\n  </div>\n</ion-header>\n\n<ion-content padding>\n	<div class="wrapper">\n			<div class="location-picker">\n				<div class="img-wrapper">\n					<img src="././assets/img/route-icon.png" >	\n				</div>\n				\n				<div class="input-location">\n					<input type="text" name="" id="location-start" value="Arena Trúc Khê">\n					<hr/>\n					<input type="text" name="" id="location-end" value="Arena Phạm Văn Bạch">\n				</div>\n			</div>\n		\n	</div>	\n</ion-content>\n<div class="logInBtnDiv" (click)="confirm()">\n	<div class="button-text">\n		<p>XÁC NHẬN YÊU CẦU</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\find-shipper\find-shipper.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FindShipperPage);

//# sourceMappingURL=find-shipper.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_chooser_payment_chooser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receiver_info_receiver_info__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_shipper_find_shipper__ = __webpack_require__(117);
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
 * Generated class for the DetailInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailInfoPage = (function () {
    function DetailInfoPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    DetailInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailInfoPage');
    };
    DetailInfoPage.prototype.methodChooser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_chooser_payment_chooser__["a" /* PaymentChooserPage */]);
    };
    DetailInfoPage.prototype.discount = function () {
        var discountModal = this.modal.create('ModalDiscountPage');
        discountModal.present();
    };
    DetailInfoPage.prototype.receiver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receiver_info_receiver_info__["a" /* ReceiverInfoPage */]);
    };
    DetailInfoPage.prototype.confirm = function () {
        var _this = this;
        var mrModal = this.modal.create('ModalRequestSuccessPage');
        mrModal.present();
        mrModal.onDidDismiss(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_shipper_find_shipper__["a" /* FindShipperPage */]);
        });
    };
    return DetailInfoPage;
}());
DetailInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-info',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\detail-info\detail-info.html"*/'<!--\n  Generated template for the DetailInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="suck">\n\n  <ion-navbar class="suck">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Thông tin đơn hàng và giá cước</ion-title>\n  </ion-navbar>\n  <div class="header-extend">\n  		<div class="price-wrapper">\n  			<p>20 - 25 VND</p>\n  		</div>\n  		<div class="time-wrapper">\n  			<p>THỜI GIAN : 15 PHÚT</p>\n  		</div>\n  </div>\n</ion-header>\n\n<ion-content padding>\n	<div class="wrapper">\n			<div class="location-picker">\n				<div class="img-wrapper">\n					<img src="././assets/img/route-icon.png" >	\n				</div>\n				\n				<div class="input-location">\n					<input type="text" name="" id="location-start" value="Arena Trúc Khê">\n					<hr/>\n					<input type="text" name="" id="location-end" value="Arena Phạm Văn Bạch">\n				</div>\n			</div>\n		<div class="detail-info">\n			<div class="method-block" (click)="receiver()">\n				<div class="img-wrapper ">\n					<img src="././assets/img/shipper.png" id="shipper-png">	\n				</div>\n				<p>Thông tin cá nhân người nhận :.... </p>\n				<div class="tail-section">\n					<p id="edit-button">Sửa</p>	\n				</div>\n				\n			</div>\n			<div class="method-block" (click)="methodChooser()">\n				<div class="img-wrapper ">\n					<img src="././assets/img/orange-dollar.png" >	\n				</div>\n				<p>Phương thức thanh toán :.... </p>\n				<div class="tail-section">\n					<p>Sửa</p>	\n				</div>\n				\n			</div>\n			<div class="other-block">\n				<div class="img-wrapper">\n					<img src="././assets/img/box.png" id="shipper-icon">	\n				</div>\n				<p >Loại BOX : Mini</p>\n				<div class="img-wrapper" (click)="discount()">\n					<img src="././assets/img/discount.png" >	\n				</div>\n				<p id="edit-button" (click)="discount()">Mã giảm giá</p>\n			</div>\n		</div>\n	</div>	\n</ion-content>\n<div class="logInBtnDiv" (click)="confirm()">\n	<div class="button-text">\n		<p>XÁC NHẬN ĐẶT ĐƠN</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\detail-info\detail-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], DetailInfoPage);

//# sourceMappingURL=detail-info.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_chooser_payment_chooser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receiver_info_receiver_info__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_info_detail_info__ = __webpack_require__(118);
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
 * Generated class for the CreateRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRequestPage = (function () {
    function CreateRequestPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    CreateRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateRequestPage');
    };
    CreateRequestPage.prototype.estimate = function () {
        var _this = this;
        var estimateModal = this.modal.create('ModalEstimatePage');
        estimateModal.present();
        estimateModal.onDidDismiss(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_info_detail_info__["a" /* DetailInfoPage */]);
        });
    };
    CreateRequestPage.prototype.discount = function () {
        var discountModal = this.modal.create('ModalDiscountPage');
        discountModal.present();
    };
    CreateRequestPage.prototype.methodChooser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_chooser_payment_chooser__["a" /* PaymentChooserPage */]);
    };
    CreateRequestPage.prototype.receiver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receiver_info_receiver_info__["a" /* ReceiverInfoPage */]);
    };
    return CreateRequestPage;
}());
CreateRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-request',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\create-request\create-request.html"*/'<!--\n  Generated template for the CreateRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Thiết lập đơn hàng</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="wrapper">\n		<div class="main-content">\n			<div class="location-picker">\n				<div class="img-wrapper">\n					<img src="././assets/img/route-icon.png" >	\n				</div>\n				\n				<div class="input-location">\n					<input type="text" name="" id="location-start" value="Arena Trúc Khê">\n					<hr/>\n					<input type="text" name="" id="location-end" value="Arena Phạm Văn Bạch">\n				</div>\n			</div>\n			<div class="init-info">\n				<div class="top-section">\n					<div class="img-wrapper-info ">\n						<img src="././assets/img/box.png" >	\n					</div>	\n					<div class="product-info">\n						<p>Thiết lập thông tin sản phảm đơn hàng</p>\n						<p>Tên mặt hàng :...............</p>\n						<p>Mã sản phẩm :...............</p>\n						<p>Số lượng & kích thước :...............</p>				\n					</div>\n				</div>			\n				<div class="img-wrapper">\n					<img src="././assets/img/instruction.png" >	\n				</div>		\n			</div>\n		</div>\n		<div class="detail-info">\n			<div class="method-block" (click)="methodChooser()">\n				<div class="img-wrapper ">\n					<img src="././assets/img/orange-dollar.png" >	\n				</div>\n				<p>Phương thức thanh toán :.... </p>\n				<div class="tail-section">\n					<p id="edit-button">Sửa</p>	\n				</div>\n				\n			</div>\n			<div class="other-block">\n				<div class="img-wrapper " (click)="receiver()">\n					<img src="././assets/img/shipper.png" id="shipper-icon">	\n				</div>\n				<p (click)="receiver()">Thông tin người nhận</p>\n				<div class="img-wrapper" (click)="discount()">\n					<img src="././assets/img/discount.png" >	\n				</div>\n				<p id="edit-button" (click)="discount()" >Mã giảm giá</p>\n			</div>\n		</div>\n	</div>	\n</ion-content>\n<div class="logInBtnDiv" (click)="estimate()">\n	<div class="button-text">\n		<p>THIẾT LẬP ĐƠN HÀNG</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\create-request\create-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], CreateRequestPage);

//# sourceMappingURL=create-request.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_location_home_location__ = __webpack_require__(53);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_location_home_location__["a" /* HomeLocationPage */]);
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\history\history.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Lịch sử lộ trình</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="symbol-main">\n		<img src="././assets/img/history.png" >\n	</div>\n\n	\n\n	\n</ion-content>'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\history\history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirm-phone-number/confirm-phone-number.module": [
		286,
		24
	],
	"../pages/create-request/create-request.module": [
		306,
		23
	],
	"../pages/death-end/death-end.module": [
		292,
		22
	],
	"../pages/detail-info/detail-info.module": [
		304,
		21
	],
	"../pages/find-shipper/find-shipper.module": [
		301,
		20
	],
	"../pages/forgot/forgot.module": [
		289,
		19
	],
	"../pages/history/history.module": [
		307,
		18
	],
	"../pages/home-location/home-location.module": [
		284,
		17
	],
	"../pages/login/login.module": [
		290,
		16
	],
	"../pages/modal-cancel/modal-cancel.module": [
		297,
		4
	],
	"../pages/modal-discount/modal-discount.module": [
		296,
		3
	],
	"../pages/modal-estimate/modal-estimate.module": [
		305,
		2
	],
	"../pages/modal-request-success/modal-request-success.module": [
		302,
		1
	],
	"../pages/modal-why/modal-why.module": [
		299,
		0
	],
	"../pages/navigate/navigate.module": [
		308,
		15
	],
	"../pages/overview/overview.module": [
		298,
		14
	],
	"../pages/payment-chooser/payment-chooser.module": [
		295,
		13
	],
	"../pages/payment-info/payment-info.module": [
		294,
		12
	],
	"../pages/payment-input/payment-input.module": [
		293,
		11
	],
	"../pages/personal-info/personal-info.module": [
		285,
		10
	],
	"../pages/receiver-info/receiver-info.module": [
		303,
		9
	],
	"../pages/set-up-phone-number/set-up-phone-number.module": [
		287,
		8
	],
	"../pages/signup/signup.module": [
		288,
		7
	],
	"../pages/track-shipper/track-shipper.module": [
		300,
		6
	],
	"../pages/welcome/welcome.module": [
		291,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatePage; });
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
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NavigatePage = (function () {
    function NavigatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NavigatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NavigatePage');
    };
    return NavigatePage;
}());
NavigatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-navigate',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\navigate\navigate.html"*/'<!--\n  Generated template for the NavigatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>navigate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\navigate\navigate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], NavigatePage);

//# sourceMappingURL=navigate.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_location_home_location__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_navigate_navigate__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_set_up_phone_number_set_up_phone_number__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_confirm_phone_number_confirm_phone_number__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_info_payment_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payment_input_payment_input__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_death_end_death_end__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_create_request_create_request__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_payment_chooser_payment_chooser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_find_shipper_find_shipper__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_track_shipper_track_shipper__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_receiver_info_receiver_info__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_overview_overview__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_history_history__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_detail_info_detail_info__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { Google-Maps } from '@ionic-native/google-maps';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_navigate_navigate__["a" /* NavigatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_set_up_phone_number_set_up_phone_number__["a" /* SetUpPhoneNumberPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_confirm_phone_number_confirm_phone_number__["a" /* ConfirmPhoneNumberPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_death_end_death_end__["a" /* DeathEndPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_payment_info_payment_info__["a" /* PaymentInfoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_payment_input_payment_input__["a" /* PaymentInputPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_create_request_create_request__["a" /* CreateRequestPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_location_home_location__["a" /* HomeLocationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_detail_info_detail_info__["a" /* DetailInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_payment_chooser_payment_chooser__["a" /* PaymentChooserPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_find_shipper_find_shipper__["a" /* FindShipperPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_track_shipper_track_shipper__["a" /* TrackShipperPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_receiver_info_receiver_info__["a" /* ReceiverInfoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_overview_overview__["a" /* OverviewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home-location/home-location.module#HomeLocationPageModule', name: 'HomeLocationPage', segment: 'home-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirm-phone-number/confirm-phone-number.module#ConfirmPhoneNumberPageModule', name: 'ConfirmPhoneNumberPage', segment: 'confirm-phone-number', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/set-up-phone-number/set-up-phone-number.module#SetUpPhoneNumberPageModule', name: 'SetUpPhoneNumberPage', segment: 'set-up-phone-number', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/death-end/death-end.module#DeathEndPageModule', name: 'DeathEndPage', segment: 'death-end', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment-input/payment-input.module#PaymentInputPageModule', name: 'PaymentInputPage', segment: 'payment-input', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment-info/payment-info.module#PaymentInfoPageModule', name: 'PaymentInfoPage', segment: 'payment-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment-chooser/payment-chooser.module#PaymentChooserPageModule', name: 'PaymentChooserPage', segment: 'payment-chooser', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-discount/modal-discount.module#ModalDiscountPageModule', name: 'ModalDiscountPage', segment: 'modal-discount', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-cancel/modal-cancel.module#ModalCancelPageModule', name: 'ModalCancelPage', segment: 'modal-cancel', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-why/modal-why.module#ModalWhyPageModule', name: 'ModalWhyPage', segment: 'modal-why', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/track-shipper/track-shipper.module#TrackShipperPageModule', name: 'TrackShipperPage', segment: 'track-shipper', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-shipper/find-shipper.module#FindShipperPageModule', name: 'FindShipperPage', segment: 'find-shipper', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-request-success/modal-request-success.module#ModalRequestSuccessPageModule', name: 'ModalRequestSuccessPage', segment: 'modal-request-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/receiver-info/receiver-info.module#ReceiverInfoPageModule', name: 'ReceiverInfoPage', segment: 'receiver-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail-info/detail-info.module#DetailInfoPageModule', name: 'DetailInfoPage', segment: 'detail-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-estimate/modal-estimate.module#ModalEstimatePageModule', name: 'ModalEstimatePage', segment: 'modal-estimate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-request/create-request.module#CreateRequestPageModule', name: 'CreateRequestPage', segment: 'create-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/navigate/navigate.module#NavigatePageModule', name: 'NavigatePage', segment: 'navigate', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_navigate_navigate__["a" /* NavigatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_set_up_phone_number_set_up_phone_number__["a" /* SetUpPhoneNumberPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_confirm_phone_number_confirm_phone_number__["a" /* ConfirmPhoneNumberPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_death_end_death_end__["a" /* DeathEndPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_payment_info_payment_info__["a" /* PaymentInfoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_payment_input_payment_input__["a" /* PaymentInputPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_create_request_create_request__["a" /* CreateRequestPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_location_home_location__["a" /* HomeLocationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_detail_info_detail_info__["a" /* DetailInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_payment_chooser_payment_chooser__["a" /* PaymentChooserPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_find_shipper_find_shipper__["a" /* FindShipperPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_track_shipper_track_shipper__["a" /* TrackShipperPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_receiver_info_receiver_info__["a" /* ReceiverInfoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_overview_overview__["a" /* OverviewPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_personal_info_personal_info__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_death_end_death_end__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_info_payment_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_request_create_request__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.geolocation = geolocation;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tạo đơn hàng', component: __WEBPACK_IMPORTED_MODULE_9__pages_create_request_create_request__["a" /* CreateRequestPage */], icon: 'home' },
            { title: 'BOXiPay', component: __WEBPACK_IMPORTED_MODULE_8__pages_payment_info_payment_info__["a" /* PaymentInfoPage */], icon: 'cash' },
            { title: 'Lịch sử đơn hàng', component: __WEBPACK_IMPORTED_MODULE_6__pages_death_end_death_end__["a" /* DeathEndPage */], icon: 'time' },
            { title: 'Lộ trình đơn hàng', component: __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */], icon: 'notifications' },
            { title: 'Cài đặt', component: __WEBPACK_IMPORTED_MODULE_6__pages_death_end_death_end__["a" /* DeathEndPage */], icon: 'settings' },
            { title: 'Trợ Giúp', component: __WEBPACK_IMPORTED_MODULE_6__pages_death_end_death_end__["a" /* DeathEndPage */], icon: 'help-circle' },
            { title: 'Thoát', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'exit' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.           
            _this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('#FFCC38');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPersonalInfo = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_personal_info_personal_info__["a" /* PersonalInfoPage */]);
    };
    MyApp.prototype.menuClosed = function () {
        this.events.publish('menu:closed', '');
    };
    MyApp.prototype.menuOpened = function () {
        this.events.publish('menu:opened', '');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()" (ionClose)="menuClosed()"  >\n  <ion-header class="css-annoy">\n    <div class="user-account">\n      <div class="avatar" (click)="openPersonalInfo()" menuClose>\n        <img src="././assets/img/avatar_default.png" >\n      </div>\n      <div class="user-information">\n        <p class="full-name">Họ và Tên</p>\n        <p class="telephone-number">0998899449</p>  \n      </div>      \n    </div>    \n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item no-lines *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_location_home_location__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    // map: GoogleMap;
    // mapElement: HTMLElement;
    function HomePage(googleMaps, platform, geolocation, events, navCtrl) {
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.events = events;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // this.loadMap();
    };
    // loadMap() {
    //    this.mapElement = document.getElementById('map');
    //    let mapOptions: GoogleMapOptions = {
    //      camera: {
    //        target: {
    //         lat: 21.036207,
    //         lng: 105.815829
    //        },
    //        zoom: 18,
    //        tilt: 30
    //      }
    //    };
    //    	// lat: 21.036207,
    //     //    lng: 105.815829
    //    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    //    // Wait the MAP_READY before using any methods.
    //    this.map.one(GoogleMapsEvent.MAP_READY)
    //      .then(() => {
    //        console.log('Map is ready!');
    //        // Now you can use all methods safely.
    //        this.map.addMarker({
    //            title: 'Ionic',
    //            icon: 'blue',
    //            animation: 'DROP',
    //            position: {
    //              lat: 21.036207,
    //              lng: 105.815829
    //            }
    //          })
    //          .then(marker => {
    //            marker.on(GoogleMapsEvent.MARKER_CLICK)
    //              .subscribe(() => {
    //                alert('clicked');
    //              });
    //          });
    //      });
    //      this.events.subscribe('menu:opened', () => {
    //          this.map.setClickable( false );
    //      });
    //      this.events.subscribe('menu:closed', () => {
    //          this.map.setClickable( true );
    //      });
    //  }
    HomePage.prototype.selectLocation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_location_home_location__["a" /* HomeLocationPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core___["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vị trí hiện tại</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="inputLocation">\n		<div class="input-wrapper">\n			<p><img src="././assets/img/search-icon.png"></p>\n			<ion-input type="text" placeholder="Nhập vị trí"></ion-input>\n      <div class="img-wrapper" (click)="selectLocation()">\n        <ion-icon name="md-arrow-round-forward" item-left (click)="selectLocation()" ></ion-icon> \n      </div>\n       \n		</div>\n	</div>\n\n <!--   <iframe\n    width="100%"\n    height="100%"\n    frameborder="0" style="border:0"\n    src="https://www.google.com/maps/embed/v1/view\n  ?key=AIzaSyBeXA39qGwy6N794UVLEvu2azYTA3zU_Vg\n  &center=21.036207,105.815829\n  &zoom=18&output=embed" allowfullscreen>   </iframe>-->\n\n  <iframe width="100%" height="100%" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBeXA39qGwy6N794UVLEvu2azYTA3zU_Vg&center=21.036207,105.815829&zoom=16&maptype=roadmap" allowfullscreen=""></iframe>\n  \n\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(40);
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
 * Generated class for the HomeLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeLocationPage = (function () {
    // map: GoogleMap;
    // mapElement: HTMLElement;
    function HomeLocationPage(navCtrl, navParams, googleMaps, platform, geolocation, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.events = events;
        // platform.ready().then(()=>{
        //  		this.loadMap();
        //  	});
    }
    return HomeLocationPage;
}());
HomeLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-location',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\home-location\home-location.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div class="img-wrapper">\n    	<img src="././assets/img/mini-boxi.png">	\n    </div>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="inputLocation">\n		<div class="input-wrapper">\n			<p><img src="././assets/img/search-icon.png"></p>\n			<ion-input type="text" placeholder="Nhập vị trí"></ion-input>\n       <ion-icon name="md-arrow-round-forward" item-left></ion-icon>\n		</div>\n	</div>\n\n\n  <iframe width="100%" height="100%" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBeXA39qGwy6N794UVLEvu2azYTA3zU_Vg&center=21.036207,105.815829&zoom=16&maptype=roadmap" allowfullscreen=""></iframe>\n\n  <div class="box-tranform">\n  	<div class="img-wrapper">\n  		<img src="././assets/img/unkown-box.png">\n  	</div>  		\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\home-location\home-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], HomeLocationPage);

//# sourceMappingURL=home-location.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetUpPhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_phone_number_confirm_phone_number__ = __webpack_require__(108);
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
 * Generated class for the SetUpPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetUpPhoneNumberPage = (function () {
    function SetUpPhoneNumberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SetUpPhoneNumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetUpPhoneNumberPage');
    };
    SetUpPhoneNumberPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SetUpPhoneNumberPage.prototype.confirmPhoneNumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_phone_number_confirm_phone_number__["a" /* ConfirmPhoneNumberPage */]);
    };
    return SetUpPhoneNumberPage;
}());
SetUpPhoneNumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set-up-phone-number',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\set-up-phone-number\set-up-phone-number.html"*/'<!--\n  Generated template for the SetUpPhoneNumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >Thiết lập Số điện Thoại</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="symbol-main">\n		<img src="././assets/img/phoneSetup-main-photo.png" >\n	</div>\n\n	<ion-list>\n		<ion-label fixed>Số Điện Thoại Hoặc Mail</ion-label>\n		<ion-item>\n			<ion-input type="text"></ion-input>\n		</ion-item>		\n	</ion-list>\n</ion-content>\n<div class="logInBtnDiv" (click)="confirmPhoneNumber()">\n	<div class="button-text">\n		<p>LƯU VÀ XÁC MINH</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\set-up-phone-number\set-up-phone-number.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SetUpPhoneNumberPage);

//# sourceMappingURL=set-up-phone-number.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeathEndPage; });
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
 * Generated class for the DeathEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeathEndPage = (function () {
    function DeathEndPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeathEndPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeathEndPage');
    };
    return DeathEndPage;
}());
DeathEndPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-death-end',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\death-end\death-end.html"*/'<!--\n  Generated template for the DeathEndPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Under Construction</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<img src="././assets/img/welcome.png" alt="deathEnd">\n</ion-content>\n'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\death-end\death-end.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DeathEndPage);

//# sourceMappingURL=death-end.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentChooserPage; });
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
 * Generated class for the PaymentChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentChooserPage = (function () {
    function PaymentChooserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentChooserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentChooserPage');
    };
    PaymentChooserPage.prototype.done = function () {
        this.navCtrl.pop();
    };
    PaymentChooserPage.prototype.chooseMethod = function (id) {
        document.getElementById("cash-tick").style.display = "none";
        document.getElementById("debit-tick").style.display = "none";
        document.getElementById("paypal-tick").style.display = "none";
        document.getElementById(id).style.display = "block";
    };
    return PaymentChooserPage;
}());
PaymentChooserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-chooser',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\payment-chooser\payment-chooser.html"*/'<!--\n  Generated template for the PaymentChooserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="suck">\n\n  <ion-navbar class= "suck1">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Chọn hình thức thanh toán</ion-title>\n  </ion-navbar>\n  <div class="header-extend">\n  		<div class="price-wrapper">\n  			<p>20 - 25 VND</p>\n  		</div>\n  		<div class="time-wrapper">\n  			<p>GIÁ VÉ ƯỚNG TÍNH</p>\n  		</div>\n  </div>\n</ion-header>\n\n<ion-content padding>\n	<div class="method-choose">\n		<p class="method-header">LỰA CHỌN PHƯƠNG THỨC THANH TOÁN</p>\n\n		<div class="method-wrapper" (click)="chooseMethod(\'paypal-tick\')">\n			<div class="img-wrapper" >\n				<img src="././assets/img/paypal.png" >\n			</div>			\n			<p>Paypal</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="paypal-tick">\n			</div>\n\n		</div>\n		<div class="method-wrapper" (click)="chooseMethod(\'debit-tick\')">\n			<div class="img-wrapper">\n				<img src="././assets/img/credit.png" >\n			</div>			\n			<p>Credit/Debit</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="debit-tick" >\n			</div>\n		</div>\n\n		<div class="method-wrapper" (click)="chooseMethod(\'cash-tick\')">\n			<div class="img-wrapper">\n				<img src="././assets/img/cash.png" >\n			</div>			\n			<p>Cash</p>\n			<div class="method-status">\n				<img src="././assets/img/tick.png" id="cash-tick">\n			</div>\n\n		</div>\n\n\n		<div class="logInBtnDiv" padding (click)="paymentInput()">\n			<img src="././assets/img/doneBtn.png" >\n		</div>\n		\n	</div>\n</ion-content>\n<div class="logInBtnDiv" (click)="done()">\n	<div class="button-text">\n		<p>XONG</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\payment-chooser\payment-chooser.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PaymentChooserPage);

//# sourceMappingURL=payment-chooser.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiverInfoPage; });
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
 * Generated class for the ReceiverInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceiverInfoPage = (function () {
    function ReceiverInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReceiverInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceiverInfoPage');
    };
    ReceiverInfoPage.prototype.confirm = function () {
        this.navCtrl.pop();
    };
    return ReceiverInfoPage;
}());
ReceiverInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-receiver-info',template:/*ion-inline-start:"D:\workspace\nodejs\boxiv3\src\pages\receiver-info\receiver-info.html"*/'<!--\n  Generated template for the ReceiverInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="suck">\n  <ion-navbar class="suck1">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Thông tin người nhận</ion-title>\n  </ion-navbar>\n  <div class="header-extend">\n\n  </div>\n</ion-header>\n\n<ion-content padding>\n	<div class="wrapper">\n			<div class="location-picker">\n				<div class="img-wrapper">\n					<img src="././assets/img/route-icon.png" >	\n				</div>\n				\n				<div class="input-location">\n					<input type="text" name="" id="location-start" value="Arena Trúc Khê">\n					<hr/>\n					<input type="text" name="" id="location-end" value="Arena Phạm Văn Bạch">\n				</div>\n			</div>\n		\n	</div>	\n</ion-content>\n<div class="logInBtnDiv" (click)="confirm()">\n	<div class="button-text">\n		<p>XÁC NHẬN YÊU CẦU</p>\n	</div>			\n</div>	'/*ion-inline-end:"D:\workspace\nodejs\boxiv3\src\pages\receiver-info\receiver-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ReceiverInfoPage);

//# sourceMappingURL=receiver-info.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map