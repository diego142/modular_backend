(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-lost-password-lost-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/lost-password/lost-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/lost-password/lost-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>¿Olvidaste tu contraseña?</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <img class=\"logotipo\" src=\"assets/icon/logoV2.png\">\r\n\r\n  <div class=\"mensaje\">\r\n    <h4>\r\n      Ingresa tu correo electrónico para recuperar tu contraseña.\r\n    </h4>\r\n  </div>\r\n\r\n  <form #lostPassForm=\"ngForm\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Correo electrónico </ion-label>\r\n      <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\"\r\n        pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" required>\r\n      </ion-input>\r\n    </ion-item>\r\n  </form>\r\n\r\n  <ion-button expand=\"full\" class=\"button\" type=\"submit\" [disabled]=\"!lostPassForm.valid\" (click)=\"lostPassord()\">Enviar</ion-button>\r\n\r\n  <div class=\"registro\">\r\n    <p>¿Aún no tienes cuenta?</p>\r\n    <a routerLink=\"/new-account\">Registrate ahora!</a>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/user/lost-password/lost-password-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/user/lost-password/lost-password-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LostPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPageRoutingModule", function() { return LostPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lost_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lost-password.page */ "./src/app/pages/user/lost-password/lost-password.page.ts");




const routes = [
    {
        path: '',
        component: _lost_password_page__WEBPACK_IMPORTED_MODULE_3__["LostPasswordPage"]
    }
];
let LostPasswordPageRoutingModule = class LostPasswordPageRoutingModule {
};
LostPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LostPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/lost-password/lost-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/lost-password/lost-password.module.ts ***!
  \******************************************************************/
/*! exports provided: LostPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPageModule", function() { return LostPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lost_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lost-password-routing.module */ "./src/app/pages/user/lost-password/lost-password-routing.module.ts");
/* harmony import */ var _lost_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lost-password.page */ "./src/app/pages/user/lost-password/lost-password.page.ts");







let LostPasswordPageModule = class LostPasswordPageModule {
};
LostPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lost_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["LostPasswordPageRoutingModule"]
        ],
        declarations: [_lost_password_page__WEBPACK_IMPORTED_MODULE_6__["LostPasswordPage"]]
    })
], LostPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/user/lost-password/lost-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/lost-password/lost-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n}\n\nion-item {\n  --background: #fafafa;\n  --color: black;\n  --border-color: black;\n}\n\nion-button {\n  --background: #009688;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.logotipo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mensaje {\n  text-align: center;\n  text-justify: auto;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  font-size: large;\n}\n\n.registro {\n  text-align: center;\n  text-justify: auto;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  font-size: large;\n}\n\n.button {\n  margin-top: 30px;\n  margin-left: 60px;\n  height: 40px;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9sb3N0LXBhc3N3b3JkL2xvc3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL2xvc3QtcGFzc3dvcmQvbG9zdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5sb2dvdGlwb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1lbnNhamV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLnJlZ2lzdHJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/user/lost-password/lost-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/lost-password/lost-password.page.ts ***!
  \****************************************************************/
/*! exports provided: LostPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordPage", function() { return LostPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





let LostPasswordPage = class LostPasswordPage {
    constructor(userService, router, alertController) {
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.email = '';
    }
    ngOnInit() {
    }
    navigateAlert(head, subHead, btnTex, navigate) {
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
    lostPassord() {
        this.userService.lostPass(this.email).subscribe((res) => {
            if (res.status) {
                this.navigateAlert('¡RECUPERACION EXITOSA!', 'Hemos envidado un correo a tu email.', 'OK', 'login');
            }
            else {
                this.navigateAlert('¡PROBLEMA CON EL CORREO!', 'Hubo un problema al enviar el correo, vuelve a intentarlo.', 'OK', 'lost-password');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
        });
        this.email = '';
    }
};
LostPasswordPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LostPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lost-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lost-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/lost-password/lost-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lost-password.page.scss */ "./src/app/pages/user/lost-password/lost-password.page.scss")).default]
    })
], LostPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-lost-password-lost-password-module-es2015.js.map