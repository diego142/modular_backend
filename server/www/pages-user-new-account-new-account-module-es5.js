(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-new-account-new-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/new-account/new-account.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/new-account/new-account.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserNewAccountNewAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Registrar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"logotipo\">\r\n    <img src=\"assets/icon/logoV2.png\">\r\n  </div>\r\n\r\n  <form #formLogin=\"ngForm\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Nombre: </ion-label>\r\n      <ion-input autofocus minlength=\"2\" [(ngModel)]=\"user.name\" type=\"text\" name=\"nombre\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Apellidos: </ion-label>\r\n      <ion-input type=\"text\" minlength=\"2\" [(ngModel)]=\"user.lastName\" name=\"apellido\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Correo electrónico: </ion-label>\r\n      <ion-input type=\"email\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" [(ngModel)]=\"user.email\" name=\"email\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Contraseña </ion-label>\r\n      <ion-input minlength=\"4\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Repita su contraseña </ion-label>\r\n      <ion-input type=\"password\" name=\"password2\" (keyup)=\"verifyPassword($event.target.value)\" required></ion-input>\r\n    </ion-item>\r\n  </form>\r\n\r\n  <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"verifyNewUser()\" [disabled]=\"!(formLogin.valid && (bandera==true))\" >Registrar</ion-button>\r\n\r\n  <div class=\"iniciar\">\r\n    <p>¿Ya tienes una cuenta?</p>\r\n    <a routerLink=\"/login/\">Inicia sesión ahora</a>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/user/new-account/new-account-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/user/new-account/new-account-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: NewAccountPageRoutingModule */

    /***/
    function srcAppPagesUserNewAccountNewAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPageRoutingModule", function () {
        return NewAccountPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _new_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-account.page */
      "./src/app/pages/user/new-account/new-account.page.ts");

      var routes = [{
        path: '',
        component: _new_account_page__WEBPACK_IMPORTED_MODULE_3__["NewAccountPage"]
      }];

      var NewAccountPageRoutingModule = function NewAccountPageRoutingModule() {
        _classCallCheck(this, NewAccountPageRoutingModule);
      };

      NewAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewAccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/user/new-account/new-account.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/user/new-account/new-account.module.ts ***!
      \**************************************************************/

    /*! exports provided: NewAccountPageModule */

    /***/
    function srcAppPagesUserNewAccountNewAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPageModule", function () {
        return NewAccountPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _new_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-account-routing.module */
      "./src/app/pages/user/new-account/new-account-routing.module.ts");
      /* harmony import */


      var _new_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-account.page */
      "./src/app/pages/user/new-account/new-account.page.ts");

      var NewAccountPageModule = function NewAccountPageModule() {
        _classCallCheck(this, NewAccountPageModule);
      };

      NewAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAccountPageRoutingModule"]],
        declarations: [_new_account_page__WEBPACK_IMPORTED_MODULE_6__["NewAccountPage"]]
      })], NewAccountPageModule);
      /***/
    },

    /***/
    "./src/app/pages/user/new-account/new-account.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/pages/user/new-account/new-account.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserNewAccountNewAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n}\n\nion-item {\n  --background: #fafafa;\n  --color: black;\n  --border-color: black;\n}\n\nion-button {\n  --background: #009688;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.logotipo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.iniciar {\n  text-align: center;\n  text-justify: auto;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  font-size: large;\n}\n\n.button {\n  margin-top: 20px;\n  margin-left: 60px;\n  height: 40px;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9uZXctYWNjb3VudC9uZXctYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbmV3LWFjY291bnQvbmV3LWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dvdGlwb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmluaWNpYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/user/new-account/new-account.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/user/new-account/new-account.page.ts ***!
      \************************************************************/

    /*! exports provided: NewAccountPage */

    /***/
    function srcAppPagesUserNewAccountNewAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPage", function () {
        return NewAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NewAccountPage = /*#__PURE__*/function () {
        function NewAccountPage(userService, alertController, router, toastController) {
          _classCallCheck(this, NewAccountPage);

          this.userService = userService;
          this.alertController = alertController;
          this.router = router;
          this.toastController = toastController;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          this.bandera = false;
        }

        _createClass(NewAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "failedAccount",
          value: function failedAccount(head, subHead, btnTex, navigate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: head,
                        subHeader: subHead,
                        buttons: [{
                          text: btnTex,
                          handler: function handler() {
                            _this.router.navigate(['/' + navigate + '/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(head, msg, time) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        header: head,
                        message: msg,
                        color: 'primary',
                        duration: time
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "verifyPassword",
          value: function verifyPassword(password) {
            var lenght1 = this.user.password.length;
            var lenght2 = password.length;

            if (lenght1 === lenght2) {
              if (this.user.password !== password) {
                this.bandera = false;
                this.toast('Error,', 'Las contraseñas no coinciden', 2000);
              } else {
                this.bandera = true;
              }
            } else {
              this.bandera = false;
            }
          }
        }, {
          key: "verifyNewUser",
          value: function verifyNewUser() {
            var _this2 = this;

            this.userService.getUser(this.user.email).subscribe(function (res) {
              if (res.data !== null) {
                _this2.toast('Error', 'La dirección de correo electrónico que ingreso ya esta registrada. Intente de nuevo', 4000);

                _this2.user.email = ' ';
              } else {
                _this2.addUser();
              }
            }, function (err) {
              _this2.failedAccount('ERROR DE SERVIDOR', err.message, 'OK', 'new-account');
            });
          }
        }, {
          key: "addUser",
          value: function addUser() {
            var _this3 = this;

            this.user.active = true;
            this.user.age = 0;
            this.user.permission = 0;
            this.user.code = ' ';
            this.user.career = ' ';
            this.userService.postUser(this.user).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (res.status) {
                          this.router.navigate(['/skill-form/' + res.data._id]);
                        } else {
                          this.failedAccount('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear este usuario', 'OK', 'login');
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (err) {
              _this3.failedAccount('ERROR DE SERVIDOR', err.message, 'OK', 'new-account');
            });
          }
        }]);

        return NewAccountPage;
      }();

      NewAccountPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      NewAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new-account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/new-account/new-account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new-account.page.scss */
        "./src/app/pages/user/new-account/new-account.page.scss"))["default"]]
      })], NewAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-new-account-new-account-module-es5.js.map