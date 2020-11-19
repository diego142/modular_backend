(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Iniciar Sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<div class=\"logotipo\">\r\n  <img src=\"assets/icon/logoV2.png\">\r\n</div>\r\n  \r\n<form #formLogin=\"ngForm\">\r\n<ion-item>\r\n    <ion-label position=\"floating\"><ion-icon name=\"mail-outline\"></ion-icon> Correo electrónico </ion-label>\r\n    <ion-input type=\"email\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" name=\"email\" [(ngModel)]=\"user.email\" required></ion-input>\r\n</ion-item>\r\n  \r\n<ion-item>\r\n    <ion-label position=\"floating\"> <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> Contraseña </ion-label>\r\n    <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required></ion-input>\r\n</ion-item>\r\n</form>\r\n\r\n<ion-button expand=\"full\" (click)=\"verifyUser()\" [disabled]=\"!formLogin.valid\">Entrar</ion-button>\r\n\r\n<div class=\"links\">\r\n  <a routerLink=\"/lost-password\">¿Olvidaste tu contraseña?</a><br><br>\r\n  <a routerLink=\"/new-account\">Crear cuenta nueva</a>\r\n</div>\r\n  \r\n</ion-content>   ");

/***/ }),

/***/ "./src/app/pages/user/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/user/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/user/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/user/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/user/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n}\n\nion-item {\n  --background: #fafafa;\n  --color: black;\n  --border-color: black;\n}\n\nion-button {\n  --background: #009688;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.logotipo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.button {\n  margin-top: 30px;\n  margin-left: 60px;\n  height: 40px;\n  width: 70%;\n}\n\n.links {\n  text-align: center;\n  margin-right: 100px;\n  margin-left: 100px;\n  padding-top: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dvdGlwb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/user/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/util */ "./src/app/models/util.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/skills.service */ "./src/app/services/skills.service.ts");









let LoginPage = class LoginPage {
    constructor(userService, router, toastController, alertController, skillService) {
        this.userService = userService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.skillService = skillService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
    }
    errorLogin(head, subHead, btnTex, navigate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: head,
                subHeader: subHead,
                buttons: [{
                        text: btnTex,
                        handler: () => {
                            this.router.navigate(['/' + navigate + '/']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    toast(head, msg, time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: head,
                message: msg,
                color: 'myPrimary',
                duration: time
            });
            toast.present();
        });
    }
    getSkill(id) {
        this.skillService.getSkill(id).subscribe((res) => {
            if (res.status) {
                src_app_models_util__WEBPACK_IMPORTED_MODULE_3__["Util"].setStorageSkill(res.data);
            }
        }, (err) => {
            console.log(err);
        });
    }
    verifyUser() {
        this.userService.getUser(this.user.email).subscribe((res) => {
            if (res.data == null) {
                this.toast('Email no registrado!', 'Intenta de nuevo o crea una cuenta para poder entrar!', 3000);
                this.router.navigate(['/login']);
                this.user.email = '';
                this.user.password = '';
            }
            else {
                if (res.data.password === this.user.password) {
                    this.toast('Bienvenido al foro', '', 1000);
                    src_app_models_util__WEBPACK_IMPORTED_MODULE_3__["Util"].setStorageUser(res.data);
                    this.getSkill(res.data._id);
                    this.router.navigate(['/events']);
                }
                else {
                    this.toast('Contraseña incorrecta!', 'La contraseña que ingreso no coincide con el email', 2000);
                    this.router.navigate(['/login']);
                    this.user.password = '';
                }
            }
        }, (err) => {
            this.errorLogin('ERROR DE SERVIDOR', err.message, 'OK', 'login');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_7__["SkillsService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/user/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-login-login-module-es2015.js.map