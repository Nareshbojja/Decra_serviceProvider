webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main__ = __webpack_require__(81);
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
    function HomePage(navCtrl, genericPro, localStorage) {
        this.navCtrl = navCtrl;
        this.genericPro = genericPro;
        this.localStorage = localStorage;
        this.sdata = {
            "email": "service@gmail.com", "password": "123123"
        };
    }
    HomePage.prototype.Login = function () {
        var _this = this;
        if (this.sdata.email === undefined || this.sdata.email === "") {
            this.genericPro.presentToast('Please enter your email ID');
        }
        else if (this.sdata.password === undefined || this.sdata.password === "") {
            this.genericPro.presentToast('Please enter your password');
        }
        else {
            this.genericPro.showLoader();
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(this.sdata.email, this.sdata.password).then(function (res) {
                if (res) {
                    var resEmail;
                    console.log(res);
                    resEmail = res.email;
                    var de = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
                    //console.log(de);
                    _this.genericPro.getCurrentUserDetails(de).then(function (result) {
                        console.log(result);
                        // this.storagePro.remove("user_data");  
                        _this.loginData = result;
                        _this.genericPro.hideLoader();
                        if (_this.loginData == null) {
                            _this.genericPro.presentToast("Sorry, user not found");
                        }
                        else {
                            _this.localStorage.setData("service_provier_details", _this.loginData);
                            //this.events.publish('loggedin');
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
                        }
                    });
                }
                else {
                    alert("Err");
                    _this.genericPro.presentToast("Login failed");
                }
            }).catch(function (err) {
                _this.genericPro.hideLoader();
                _this.genericPro.presentToast(err);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/home/home.html"*/'\n<ion-content class="page">\n  <img class="hdrlogo" src="assets/imgs/Decra_white_clear.png">\n  <h5 class="loginTxt">SERVICE PROVIDER</h5>\n\n  <div style="margin: 18%;">\n    <h5 class="lbltxt">COMPANY NAME</h5>\n\n    <ion-item class="inputlogin">\n      <ion-input type="text" placeholder="Username"  [(ngModel)]="sdata.email" class="inputcls"></ion-input>\n    </ion-item>\n    <h5 class="lbltxt" style="margin-top:5%;">COMPANY PASSWORD</h5>\n    <ion-item class="inputlogin">\n      <ion-input type="text" name="password" class="inputcls"  [(ngModel)]="sdata.password" placeholder="Password" ngModel #password="ngModel"\n        required pattern=".{4,10}"></ion-input>\n\n      <!-- <button *ngIf="!showPass" ion-button clear color="dark" class="eyecls" type="button" item-right (click)="showPassword()">\n        <ion-icon name="ios-eye-off-outline"></ion-icon>\n      </button>\n      <button *ngIf="showPass" ion-button clear color="dark" class="eyecls" type="button" item-right (click)="showPassword()">\n        <ion-icon name="ios-eye-outline"></ion-icon>\n      </button> -->\n\n    </ion-item>\n  \n\n    <button (click)="Login()" ion-button class="outline loginbtn" mode="md" color="white" outline round large>\n      Login\n    </button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__["a" /* GenericProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(112);
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
* Generated class for the SelectDriverPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SelectDriverPage = (function () {
    function SelectDriverPage(navCtrl, navParams, genericPro, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.genericPro = genericPro;
        this.localStorage = localStorage;
    }
    SelectDriverPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.genericPro.getDriverEmails().then(function (driver) {
            _this.driver_emails = driver;
            console.log(_this.driver_emails.length);
            console.log("driver" + _this.driver_emails);
        });
        console.log('ionViewDidLoad SelectDriverPage');
    };
    SelectDriverPage.prototype.seldriver = function () {
        console.log(this.sel_mail);
        // console.log(this.category);
    };
    SelectDriverPage.prototype.done = function () {
        var _this = this;
        if (this.sel_mail) {
            this.genericPro.updateDriver(this.sel_mail).then(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            });
        }
        else {
            this.genericPro.presentToast('Please select driver');
        }
    };
    SelectDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-driver',template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/select-driver/select-driver.html"*/'<ion-content class="page">\n  <ion-item class="dropdowncls" style="margin-top: 25px;">\n    <ion-label>Choose Driver</ion-label>\n    <ion-select interface="action-sheet" [(ngModel)]="sel_mail" (ionChange)="seldriver();" class="selectcls">\n      <ion-option *ngFor="let cat of driver_emails" value="{{cat}}">{{cat}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <button (click)="done()" ion-button class="outline loginbtn" mode="md" color="white" outline round large>\n    Login\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/select-driver/select-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__["a" /* GenericProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]])
    ], SelectDriverPage);
    return SelectDriverPage;
}());

//# sourceMappingURL=select-driver.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the MoreinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoreinfoPage = (function () {
    function MoreinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order_det = navParams.get('vOrder');
        console.log(this.order_det);
    }
    MoreinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoreinfoPage');
    };
    MoreinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moreinfo',template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/moreinfo/moreinfo.html"*/'<!--\n  Generated template for the MoreinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="page">\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/moreinfo/moreinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MoreinfoPage);
    return MoreinfoPage;
}());

//# sourceMappingURL=moreinfo.js.map

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/main/main.module": [
		441,
		8
	],
	"../pages/moreinfo/moreinfo.module": [
		442,
		7
	],
	"../pages/order-history/order-history.module": [
		444,
		5
	],
	"../pages/select-driver/select-driver.module": [
		443,
		6
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_select_driver_select_driver__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_moreinfo_moreinfo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_history_order_history__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_storage_storage__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_Storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_generic_generic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_local_storage_local_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */], __WEBPACK_IMPORTED_MODULE_8__pages_select_driver_select_driver__["a" /* SelectDriverPage */], __WEBPACK_IMPORTED_MODULE_9__pages_moreinfo_moreinfo__["a" /* MoreinfoPage */], __WEBPACK_IMPORTED_MODULE_10__pages_order_history_order_history__["a" /* OrderHistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moreinfo/moreinfo.module#MoreinfoPageModule', name: 'MoreinfoPage', segment: 'moreinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-driver/select-driver.module#SelectDriverPageModule', name: 'SelectDriverPage', segment: 'select-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-history/order-history.module#OrderHistoryPageModule', name: 'OrderHistoryPage', segment: 'order-history', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_Storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */], __WEBPACK_IMPORTED_MODULE_8__pages_select_driver_select_driver__["a" /* SelectDriverPage */], __WEBPACK_IMPORTED_MODULE_9__pages_moreinfo_moreinfo__["a" /* MoreinfoPage */], __WEBPACK_IMPORTED_MODULE_10__pages_order_history_order_history__["a" /* OrderHistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_generic_generic__["a" /* GenericProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(81);
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
    function MyApp(platform, statusBar, splashScreen, storagePro) {
        var _this = this;
        this.storagePro = storagePro;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // firebase.initializeApp({
            //   apiKey: "AIzaSyDhJAToPf1u6UroHIp5FHQqYMG-fdv7GRA",
            //   authDomain: "decra-dev.firebaseapp.com",
            //   databaseURL: "https://decra-dev.firebaseio.com",
            //   projectId: "decra-dev",
            //   storageBucket: "decra-dev.appspot.com",
            //   messagingSenderId: "916249916936"
            // })
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
                apiKey: "AIzaSyCpKUUdY3ERnWwOd7433a5wh3MqACFpshI",
                authDomain: "decraapp-1539949113412.firebaseapp.com",
                databaseURL: "https://decraapp-1539949113412.firebaseio.com",
                projectId: "decraapp-1539949113412",
                storageBucket: "decraapp-1539949113412.appspot.com",
                messagingSenderId: "954074271017"
            });
            statusBar.styleDefault();
            splashScreen.hide();
            try {
                _this.storagePro.getData('service_provier_details').then(function (data) {
                    if (data) {
                        console.log("name===" + data.name);
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                    }
                });
            }
            catch (err) {
                console.log('firebase error');
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_Storage__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.setData = function (key, value) {
        console.log("data stored");
        return this.storage.set(key, value);
    };
    StorageProvider.prototype.getData = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.storage.get(key)
                            .then(function (data) {
                            console.log(data);
                            resolve(data),
                                function (error) { return resolve(""); };
                        });
                    })];
            });
        });
    };
    StorageProvider.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(settingName + "removed");
                        return [4 /*yield*/, this.storage.remove(settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageProvider.prototype.clearAll = function () {
        this.storage.clear().then(function () {
            console.log('all keys cleared');
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_Storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderHistoryPage = (function () {
    function OrderHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderHistoryPage');
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-history',template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/order-history/order-history.html"*/'<!--\n  Generated template for the OrderHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="page">\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/order-history/order-history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], OrderHistoryPage);
    return OrderHistoryPage;
    var _a, _b;
}());

//# sourceMappingURL=order-history.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_Storage__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalStorageProvider = (function () {
    function LocalStorageProvider(storage) {
        this.storage = storage;
        console.log('Hello LocalStorageProvider Provider');
    }
    LocalStorageProvider.prototype.setData = function (key, value) {
        console.log("data stored");
        return this.storage.set(key, value);
    };
    LocalStorageProvider.prototype.getData = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.storage.get(key)
                            .then(function (data) {
                            console.log(data);
                            resolve(data),
                                function (error) { return resolve(""); };
                        });
                    })];
            });
        });
    };
    LocalStorageProvider.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(settingName + "removed");
                        return [4 /*yield*/, this.storage.remove(settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LocalStorageProvider.prototype.clearAll = function () {
        this.storage.clear().then(function () {
            console.log('all keys cleared');
        });
    };
    LocalStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_Storage__["b" /* Storage */]])
    ], LocalStorageProvider);
    return LocalStorageProvider;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StorageProvider } from '../storage/storage';

/*
  Generated class for the GenericProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GenericProvider = (function () {
    function GenericProvider(toastCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello GenericProvider Provider');
    }
    GenericProvider.prototype.getCurrentUserDetails = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = "serviceProvider_details/" + uid;
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref(ref).on('value', function (itemSnapshot) {
                _this.reguser = itemSnapshot.val();
                resolve(_this.reguser);
                return false;
            }, function (error) {
                reject(error);
            });
        });
    };
    GenericProvider.prototype.getMyOrders = function (myEmail) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('orders/').on('value', function (itemSnapshot) {
                var orders = [];
                //console.log(JSON.stringify(this.reguser));
                itemSnapshot.forEach(function (itemSnap) {
                    if (myEmail == itemSnap.val().provider_email) {
                        console.log(itemSnap.val().provider_email);
                        orders.push(itemSnap.val());
                    }
                    return false;
                });
                resolve(orders);
            }, function (error) {
                reject(error);
            });
        });
    };
    GenericProvider.prototype.getDriverEmails = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('driver_details/').on('value', function (itemSnapshot) {
                var drivers = [];
                itemSnapshot.forEach(function (itemSnap) {
                    if (itemSnap.val().avaialble === "yes") {
                        console.log(itemSnap.val().email);
                        drivers.push(itemSnap.val().email);
                    }
                    return false;
                });
                resolve(drivers);
            }, function (error) {
                reject(error);
            });
        });
    };
    GenericProvider.prototype.updateStatus = function (order_id) {
        var ref = "orders/" + order_id + "/";
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref(ref).on('value', function (itemSnapshot) {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref(ref).update({
                    order_status: "on_the_way"
                });
                console.log(itemSnapshot.val());
                resolve(true);
            }, function (error) {
                reject(error);
            });
        });
    };
    GenericProvider.prototype.updateDriver = function (order_id) {
        // let ref = "driverdetails/"+order_id+"/";
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('driver_details/').orderByChild('email').equalTo(order_id).once('value', function (snapshot) {
                var driverDetails = snapshot.val();
                console.log(snapshot.key);
                console.log(snapshot.val());
                var obj = snapshot.val();
                console.log(Object.keys(obj));
                var key = Object.keys(obj);
                var ref = "driver_details/" + key + "/";
                console.log(ref);
                //  firebase.database().ref(ref).on('value', itemSnapshot => {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref(ref).update({
                    avaialble: "no"
                });
                //  })
                resolve(driverDetails);
                return false;
            }, function (error) {
                reject(error);
            });
        });
    };
    GenericProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GenericProvider.prototype.hideLoader = function () {
        this.loading.dismiss();
    };
    GenericProvider.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    GenericProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], GenericProvider);
    return GenericProvider;
}());

//# sourceMappingURL=generic.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_driver_select_driver__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__moreinfo_moreinfo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_history_order_history__ = __webpack_require__(445);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, genericPro, storagePro) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.genericPro = genericPro;
        this.storagePro = storagePro;
        // let myDetails:any = this.storagePro.getData('');
        this.storagePro.getData('service_provier_details').then(function (val) {
            console.log("" + val);
            _this.resEmail = val.email;
            // console.log("ooo" + this.resEmail);
            _this.getMYOrders(_this.resEmail);
        });
        // let resEmail  = JSON.stringify(myDetails.email);
    }
    MainPage.prototype.getMYOrders = function (myEmail) {
        var _this = this;
        this.genericPro.showLoader();
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('orders/').on('value', function (itemSnapshot) {
            var orders = [];
            console.log(itemSnapshot.val());
            itemSnapshot.forEach(function (itemSnap) {
                if (myEmail == itemSnap.val().provider_email) {
                    console.log(itemSnap.val().provider_email);
                    orders.push(itemSnap.val());
                }
                return false;
            });
            if (_this.myOrders == null) {
                _this.myOrders = orders;
            }
            else {
                _this.genericPro.presentToast("Sorry...You don't have any orders");
            }
            _this.genericPro.hideLoader();
            console.log("myyy" + JSON.stringify(_this.myOrders));
        });
    };
    MainPage.prototype.selctDriver = function (o_id) {
        console.log(o_id);
        this.genericPro.updateStatus(o_id);
        //send status update as notification to the user 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__select_driver_select_driver__["a" /* SelectDriverPage */]);
    };
    MainPage.prototype.viewMore = function (order_id) {
        var viewOrd;
        console.log(order_id);
        this.myOrders.forEach(function (ord) {
            console.log(ord);
            if (order_id == ord.order_id) {
                viewOrd = ord;
            }
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__moreinfo_moreinfo__["a" /* MoreinfoPage */], {
            vOrder: viewOrd
        });
    };
    MainPage.prototype.orderHitory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__order_history_order_history__["a" /* OrderHistoryPage */]);
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="page">\n  <ion-row style="margin:5px;">\n    \n  <ion-col width-50 style="margin:2%;">\n    \n  \n  <img class="hdrlogo" src="assets/imgs/Decra_white_clear.png">\n  <div class="mainpageDiv">\n    <h5 class="mainpageText">MAIN PAGE</h5>\n  </div>\n</ion-col>\n<ion-col width-50>\n  \n\n<div class="welcomeDiv">\n    <h5 class="welcomeText">WELCOME NAResh Bojja</h5>\n  </div>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col width-50>\n    <button (click)="orderHitory()" ion-button class="outline loginbtn" mode="md" color="white" style= "margin-left:40%; " outline round large>\n      Order history\n    </button>\n      </ion-col>\n  <ion-col width-50>\n    <button (click)="Login()" ion-button class="outline loginbtn" mode="md" color="white" style="margin-left:12%;" outline round large>\n      Extend request\n    </button>\n  </ion-col>\n</ion-row>\n<ion-grid class="hdgrid">\n  <ion-row>\n    <ion-col col-1 style="padding:44px;">\n     <div class="headtxt">\n        #\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="headtxt">\n        CUSTOMER NAME\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col>\n      <div class="headtxt">\n        CAR CATEGORY\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col>\n      <div class="headtxt">\n        CAR NAME\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col>\n      <div class="headtxt">\n        DURATION\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid class="datagrid">\n  <ion-row *ngFor= "let order of myOrders">\n    <ion-col col-1 style="padding:44px;">\n     <div class="datatxt" >\n        #\n      </div>\n    </ion-col>\n    <ion-col col-2> \n      <div class="datatxt" >\n        {{order.name}}\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col col-3> \n      <div class="datatxt" >\n        {{order.category}}\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col col-3> \n      <div class="datatxt" >\n        {{order.manufacture}}\n      </div>\n    </ion-col>\n    <div class="divide"></div>\n\n    <ion-col col-2> \n      <div class="datatxt" >\n        {{order.FromDate}} to {{order.ToDate}}\n      </div>\n    </ion-col>\n    <ion-col col-3> \n      <div class="datatxt" (click)="selctDriver(order.order_id);">\n        ACCEPT\n      </div>\n    </ion-col>\n    <ion-col col-3> \n      <div class="datatxt" >\n        REJECT\n      </div>\n    </ion-col>\n    <ion-col col-3> \n      <div class="datatxt" (click)="viewMore(order.order_id);">\n        MORE INFO\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/bojjanaresh/Documents/GitHub/Decra_serviceProvider/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__["a" /* GenericProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_generic_generic__["a" /* GenericProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__["a" /* LocalStorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]) === "function" && _d || Object])
    ], MainPage);
    return MainPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map