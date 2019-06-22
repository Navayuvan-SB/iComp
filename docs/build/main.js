webpackJsonp([7],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_slider__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.storage.get('intro-done').then(function (done) {
            if (!done) {
                _this.storage.set('intro-done', true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__slider_slider__["a" /* SliderPage */]);
            }
        });
        this.storage.get("Name").then(function (data) {
            _this.name = data;
        });
        this.storage.get("Stage").then(function (data) {
            _this.badge = data;
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('intro-done').then(function (done) {
            if (!done) {
                _this.storage.set('intro-done', true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__slider_slider__["a" /* SliderPage */]);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>iComp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      \n    <ion-card class="card-home">\n\n        <ion-card-header>\n          <h1>Hey</h1>\n          <h1 id="nameHomePage">{{ name }}</h1>\n          <ion-badge id="namebadgeHomePage" item-end>{{ badge }}</ion-badge>\n        </ion-card-header>\n      \n        <ion-card-content>\n\n          <img src="assets/imgs/ionic-icon.png" class="card-image"/>\n\n          <h3> Welcome to <b>iComp</b> App</h3>\n          \n          <h4> Swipe right to explore more </h4>\n\n        </ion-card-content>\n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicMagicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_pop_over_my_pop_over__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar_search_bar__ = __webpack_require__(154);
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
 * Generated class for the IonicMagicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IonicMagicsPage = /** @class */ (function () {
    function IonicMagicsPage(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
    }
    IonicMagicsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IonicMagicsPage');
    };
    IonicMagicsPage.prototype.pressEvent = function (e) {
        this.press++;
    };
    IonicMagicsPage.prototype.panEvent = function (e) {
        this.pan++;
    };
    IonicMagicsPage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    IonicMagicsPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    IonicMagicsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__my_pop_over_my_pop_over__["a" /* MyPopOverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    IonicMagicsPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_bar_search_bar__["a" /* SearchBarPage */]);
        modal.present();
    };
    IonicMagicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic-magics',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/ionic-magics/ionic-magics.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ionic Magics</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-content>\n\n        <ion-list>\n          <a ion-item (click)="openModal()">\n            Search Bar\n          </a>\n\n          <a ion-item >\n              Range Bar\n          </a>\n          <ion-item>\n\n            <ion-range [(ngModel)]="brightness">\n              <ion-icon range-left small name="sunny"></ion-icon>\n              <ion-icon range-right name="sunny"></ion-icon>\n            </ion-range>\n            <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n              <ion-icon range-left small name="contrast"></ion-icon>\n              <ion-icon range-right name="contrast"></ion-icon>\n            </ion-range>\n\n            <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n              <ion-icon range-left small name="brush"></ion-icon>\n              <ion-icon range-right name="brush"></ion-icon>\n            </ion-range>\n\n            <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n                <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n                <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n            </ion-range>\n\n\n            \n          </ion-item>\n          <a ion-item >\n              Gestures\n          </a>\n          <ion-item >\n\n            <ion-card (tap)="tapEvent($event)">\n                <ion-item>\n                  Tapped: {{tap}} times\n                </ion-item>\n              </ion-card>\n            \n              <ion-card (press)="pressEvent($event)">\n                <ion-item>\n                  Pressed: {{press}} times\n                </ion-item>\n              </ion-card>\n            \n              <ion-card (pan)="panEvent($event)">\n                <ion-item>\n                  Panned: {{pan}} times\n                </ion-item>\n              </ion-card>\n            \n              <ion-card (swipe)="swipeEvent($event)">\n                <ion-item>\n                  Swiped: {{swipe}} times\n                </ion-item>\n              </ion-card>\n              \n          </ion-item>\n        </ion-list>\n      \n      </ion-content>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/ionic-magics/ionic-magics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], IonicMagicsPage);
    return IonicMagicsPage;
}());

//# sourceMappingURL=ionic-magics.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPopOverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the MyPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPopOverPage = /** @class */ (function () {
    function MyPopOverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyPopOverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPopOverPage');
    };
    MyPopOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-pop-over',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/my-pop-over/my-pop-over.html"*/'<!--\n  Generated template for the MyPopOverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>PopOver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h1>Nothing Impressive..!! Just a Pop Over</h1>\n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/my-pop-over/my-pop-over.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MyPopOverPage);
    return MyPopOverPage;
}());

//# sourceMappingURL=my-pop-over.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchBarPage = /** @class */ (function () {
    function SearchBarPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.initializeItems();
    }
    SearchBarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchBarPage');
    };
    SearchBarPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    SearchBarPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchBarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-bar',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/search-bar/search-bar.html"*/'<!--\n  Generated template for the SearchBarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Search-bar</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/search-bar/search-bar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], SearchBarPage);
    return SearchBarPage;
}());

//# sourceMappingURL=search-bar.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage, actionSheetCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.isToggled = false;
        this.storage.get("Name").then(function (data) {
            _this.name = data;
        });
        this.storage.get("City").then(function (data) {
            _this.city = data;
        });
        this.storage.get("DOB").then(function (data) {
            _this.dob = data;
        });
        this.storage.get("StudyTime").then(function (data) {
            _this.duration = data;
        });
        this.storage.get("Selected").then(function (data) {
            _this.technology = data;
        });
        this.storage.get("Stage").then(function (data) {
            _this.stage = data;
        });
    }
    ProfilePage.prototype.notify = function () {
        if (this.isToggled) {
            document.documentElement.style.setProperty("--color", "green");
        }
        else {
            document.documentElement.style.setProperty("--color", "black");
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.clearAll = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'destructive',
                    handler: function () {
                        _this.storage.set("Name", "");
                        _this.storage.set("City", "");
                        _this.storage.set("DOB", "");
                        _this.storage.set("StudyTime", "");
                        _this.storage.set("Selected", "");
                        _this.storage.set("Stage", "");
                        var alert = _this.alertCtrl.create({
                            title: 'Cleared.!!',
                            subTitle: 'Your details from my mind was erased..!!',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                }, {
                    text: 'Oops..!! Sorry',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/profile/profile.html"*/'\n<ion-content padding>\n\n  <h1 class="centre-text" style="color:blue">Profile</h1>\n\n  <ion-grid class="centre-grid">\n\n    <ion-row class="row-margin">\n\n      <ion-col>\n        <h5 class="left-grid">Name</h5>\n      </ion-col>\n      <ion-col>\n        <h6 class="right-grid"> {{ name }} </h6>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="row-margin">\n        <ion-col>\n          <h5 class="left-grid">City</h5>\n        </ion-col>\n        <ion-col>\n          <h6 class="right-grid"> {{ city }} </h6>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row class="row-margin">\n          <ion-col>\n            <h5 class="left-grid">Date of Birth</h5>\n          </ion-col>\n          <ion-col>\n            <h6 class="right-grid"> {{ dob }} </h6>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class="row-margin">\n          <ion-col>\n            <h5 class="left-grid">Study duration</h5>\n          </ion-col>\n          <ion-col>\n            <h6 class="right-grid"> {{ duration }} </h6>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class="row-margin">\n          <ion-col>\n            <h5 class="left-grid">Ionic stage</h5>\n          </ion-col>\n          <ion-col>\n            <h6 class="right-grid"> {{ stage }} </h6>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class="row-margin">\n          <ion-col>\n            <h5 class="left-grid">Technology known</h5>\n          </ion-col>\n          <ion-col>\n            <h6 class="right-grid"> {{ technology }} </h6>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class="row-margin">\n\n      <ion-col>\n\n          <ion-item>\n              <ion-label>Change the font color</ion-label>\n              <ion-toggle checked="false" [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n          </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="row-margin">\n\n        <ion-col>\n            <div class="button-center">\n              <button ion-button color="dark" outline round (click)= "clearAll()">Clear all</button>\n        </div>\n        </ion-col>\n  \n      </ion-row>\n\n  </ion-grid>\n\n  <ion-fab left bottom>\n      <button ion-fab color="dark"><ion-icon name="arrow-dropright"></ion-icon></button>\n      <ion-fab-list side="right">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-github"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n  \n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorials_tutorials__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tutorialPage = __WEBPACK_IMPORTED_MODULE_3__tutorials_tutorials__["a" /* TutorialsPage */];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Settings</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content padding>\n\n  <ion-tabs class="tabs-basic">\n    <ion-tab tabTitle="Profile" [root]="profilePage"></ion-tab>\n    <ion-tab tabTitle="Tutorials" [root]="tutorialPage"></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TutorialsPage = /** @class */ (function () {
    function TutorialsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialsPage');
    };
    TutorialsPage.prototype.ionicTutorial = function () {
        window.open("https://ionicframework.com/docs/v3/intro/installation/", '_system');
    };
    TutorialsPage.prototype.ionicComp = function () {
        window.open("https://ionicframework.com/docs/v3/components/", '_system');
    };
    TutorialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorials',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/tutorials/tutorials.html"*/'<ion-content padding>\n  \n    <ion-card (click)="ionicTutorial()">\n        <ion-card-header>\n\n          Installation\n\n        </ion-card-header>\n        <ion-card-content>\n          \n          Click this card to view the installation documents for Ionic Framework\n\n        </ion-card-content>\n      </ion-card>\n      <ion-card (click)="ionicComp()">    \n\n        <ion-card-header>\n\n            Components\n  \n          </ion-card-header>\n          <ion-card-content>\n            \n            Click this card to view the Components documents for Ionic Framework\n  \n          </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/tutorials/tutorials.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TutorialsPage);
    return TutorialsPage;
}());

//# sourceMappingURL=tutorials.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the iComp!",
                description: "iComp is an <b>Ionic Component</b> showcases for the beginners who are being exposed to Ionic framework for the first time.",
                image: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "How this App helps?",
                description: "This app contains all the <b>Components Ionic</b> have. This app also showcases the usage of all components in an interactive way.",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    SliderPage.prototype.navToStart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SliderPage');
    };
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/slider/slider.html"*/'\n  \n  <ion-content class="tutorial-page">\n  \n    <ion-slides pager>\n      <ion-slide *ngFor="let slide of slides">\n        <ion-toolbar>\n          <ion-buttons end>\n            <button ion-button (click) = "navToStart()" color="primary">Skip</button>\n          </ion-buttons>\n        </ion-toolbar>\n        <img [src]="slide.image" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n      <ion-slide>\n        <ion-toolbar>\n        </ion-toolbar>\n        <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n        <h2 class="slide-title">Ready to Explore?</h2>\n        <button ion-button (click) = "navToStart()"  large clear icon-end color="primary">\n          Continue\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/slider/slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ionic-magics/ionic-magics.module": [
		685,
		6
	],
	"../pages/my-pop-over/my-pop-over.module": [
		686,
		5
	],
	"../pages/profile/profile.module": [
		687,
		4
	],
	"../pages/search-bar/search-bar.module": [
		690,
		3
	],
	"../pages/settings/settings.module": [
		688,
		2
	],
	"../pages/slider/slider.module": [
		689,
		1
	],
	"../pages/tutorials/tutorials.module": [
		691,
		0
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
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroduceYourselfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntroduceYourselfPage = /** @class */ (function () {
    function IntroduceYourselfPage(navCtrl, navParams, toastCtrl, storage, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loading = loading;
        this.selected = [];
    }
    IntroduceYourselfPage.prototype.datachanged1 = function (e) {
        this.as = e.checked;
    };
    IntroduceYourselfPage.prototype.datachanged2 = function (e) {
        this.xam = e.checked;
    };
    IntroduceYourselfPage.prototype.datachanged3 = function (e) {
        this.flu = e.checked;
    };
    IntroduceYourselfPage.prototype.submitClick = function () {
        if (this.as == true) {
            this.selected.push("Android Studio");
            //this.selected += "- Android Studio -";
        }
        if (this.xam == true) {
            this.selected.push("Xamarin");
            //this.selected += " Xamarin -";
        }
        if (this.flu == true) {
            this.selected.push("Flutter");
            //this.selected += " Flutter -"
        }
        if (this.name) {
            this.storage.set("Name", this.name);
        }
        if (this.city) {
            this.storage.set("City", this.city);
        }
        if (this.dateofbirth) {
            this.storage.set("DOB", this.dateofbirth);
        }
        if (this.studyTime) {
            this.storage.set("StudyTime", this.studyTime);
        }
        if (this.selected) {
            this.storage.set("Selected", this.selected);
        }
        if (this.ionicStage) {
            this.storage.set("Stage", this.ionicStage);
        }
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 2000
        });
        var toast = this.toastCtrl.create({
            message: "Thanks for your Intro....!!!",
            duration: 2000,
        });
        loader.present();
        toast.present();
    };
    IntroduceYourselfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introduce-yourself',template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/pages/introduce/introduce-yourself.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Introduce yourself</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item class="inputIntroYourself">\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item class="inputIntroYourself">\n        <ion-label floating>City</ion-label>\n        <ion-input type="text" [(ngModel)]="city" name="city"></ion-input>\n    </ion-item>\n      \n    <ion-item class="dateIntroYourself">\n        <ion-label>Date of Birth</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="dateofbirth" name="dateofbirth"></ion-datetime>\n    </ion-item>\n\n    <ion-item class="dateIntroYourself">\n        <ion-label>Duration of daily study</ion-label>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="studyTime" name="studyTime"></ion-datetime>\n    </ion-item>\n\n    <ion-item class="inputIntroYourself">\n        <ion-label>What\'s your stage in Ionic</ion-label>\n        <ion-select [(ngModel)]="ionicStage" name="ionicStage" submitText="Okay" cancelText="Nah">\n          <ion-option value="Beginner">Beginner</ion-option>\n          <ion-option value="Intermediate">Intermediate</ion-option>\n          <ion-option value="Advanved">Advanved</ion-option>\n        </ion-select>\n  </ion-item>\n\n  <p class="dateIntroYourself"> Which of the following technologies you already know?</p>\n\n  <ion-item class="inputIntroYourself">\n      <ion-label>Android Studio</ion-label>\n      <ion-checkbox color="dark" checked="false" (ionChange)="datachanged1($event)"></ion-checkbox>\n  </ion-item>\n\n  <ion-item class="inputIntroYourself">\n      <ion-label>Xamarin</ion-label>\n      <ion-checkbox color="dark" checked="false" (ionChange)="datachanged2($event)"></ion-checkbox>\n  </ion-item>\n\n  <ion-item class="inputIntroYourself">\n      <ion-label>Flutter</ion-label>\n      <ion-checkbox color="dark" checked="false" (ionChange)="datachanged3($event)"></ion-checkbox>\n  </ion-item>\n\n  <div class="button-center">\n    <button ion-button color="dark" round (click)="submitClick()">Submit</button>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/pages/introduce/introduce-yourself.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], IntroduceYourselfPage);
    return IntroduceYourselfPage;
}());

//# sourceMappingURL=introduce-yourself.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_introduce_introduce_yourself__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_slider_slider__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ionic_magics_ionic_magics__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_profile_profile__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorials_tutorials__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser_ngx__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_bar_search_bar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_pop_over_my_pop_over__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_introduce_introduce_yourself__["a" /* IntroduceYourselfPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ionic_magics_ionic_magics__["a" /* IonicMagicsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorials_tutorials__["a" /* TutorialsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_bar_search_bar__["a" /* SearchBarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_pop_over_my_pop_over__["a" /* MyPopOverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ionic-magics/ionic-magics.module#IonicMagicsPageModule', name: 'IonicMagicsPage', segment: 'ionic-magics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-pop-over/my-pop-over.module#MyPopOverPageModule', name: 'MyPopOverPage', segment: 'my-pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-bar/search-bar.module#SearchBarPageModule', name: 'SearchBarPage', segment: 'search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorials/tutorials.module#TutorialsPageModule', name: 'TutorialsPage', segment: 'tutorials', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_introduce_introduce_yourself__["a" /* IntroduceYourselfPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ionic_magics_ionic_magics__["a" /* IonicMagicsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorials_tutorials__["a" /* TutorialsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_bar_search_bar__["a" /* SearchBarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_pop_over_my_pop_over__["a" /* MyPopOverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_introduce_introduce_yourself__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ionic_magics_ionic_magics__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Introduce Yourself', component: __WEBPACK_IMPORTED_MODULE_5__pages_introduce_introduce_yourself__["a" /* IntroduceYourselfPage */] },
            { title: 'Ionic Magics', component: __WEBPACK_IMPORTED_MODULE_6__pages_ionic_magics_ionic_magics__["a" /* IonicMagicsPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ns/My_works/Ionic/iComp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/ns/My_works/Ionic/iComp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http) {
        this.http = http;
        this.nameG = "";
        this.dateOfBirthG = "";
        this.cityG = "";
        this.durationOfStudyG = "";
        this.stageG = "";
        this.technologyG = "";
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.getName = function () {
        return this.nameG;
    };
    ProfileProvider.prototype.setName = function (value) {
        this.nameG = value;
    };
    ProfileProvider.prototype.getDoB = function () {
        return this.dateOfBirthG;
    };
    ProfileProvider.prototype.setDoB = function (value) {
        this.dateOfBirthG = value;
    };
    ProfileProvider.prototype.getCity = function () {
        return this.cityG;
    };
    ProfileProvider.prototype.setCity = function (value) {
        this.cityG = value;
    };
    ProfileProvider.prototype.getDuration = function () {
        return this.durationOfStudyG;
    };
    ProfileProvider.prototype.setDuration = function (value) {
        this.durationOfStudyG = value;
    };
    ProfileProvider.prototype.getStage = function () {
        return this.stageG;
    };
    ProfileProvider.prototype.setStage = function (value) {
        this.stageG = value;
    };
    ProfileProvider.prototype.getTechnology = function () {
        return this.technologyG;
    };
    ProfileProvider.prototype.setTechnology = function (value) {
        this.technologyG = value;
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map