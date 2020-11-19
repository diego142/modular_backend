(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Iniciar Sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"logotipo\">\r\n      <img src=\"assets/icon/logoV2.png\">\r\n    </div>\r\n\r\n    <form #formLogin=\"ngForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"mail-outline\"></ion-icon> Correo electrónico\r\n        </ion-label>\r\n        <ion-input type=\"email\"\r\n          pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"\r\n          name=\"email\" [(ngModel)]=\"user.email\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> Contraseña\r\n        </ion-label>\r\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required></ion-input>\r\n      </ion-item>\r\n    </form>\r\n\r\n    <ion-button expand=\"full\" (click)=\"verifyUser()\" [disabled]=\"!formLogin.valid\">Entrar</ion-button>\r\n\r\n    <div class=\"links\">\r\n      <a routerLink=\"/lost-password\">¿Olvidaste tu contraseña?</a><br><br>\r\n      <a routerLink=\"/new-account\">Crear cuenta nueva</a>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/user/login/login-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/user/login/login-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesUserLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/user/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/user/login/login.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/user/login/login.module.ts ***!
      \**************************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesUserLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/user/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/user/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/user/login/login.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/user/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n}\n\nion-item {\n  --background: #fafafa;\n  --color: black;\n  --border-color: black;\n}\n\nion-button {\n  --background: #009688;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.logotipo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.button {\n  margin-top: 30px;\n  margin-left: 60px;\n  height: 40px;\n  width: 70%;\n}\n\n.links {\n  text-align: center;\n  margin-right: 100px;\n  margin-left: 100px;\n  margin-bottom: 40px;\n  padding-top: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxvZ290aXBve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/user/login/login.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/user/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesUserLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/skills.service */
      "./src/app/services/skills.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(userService, router, toastController, alertController, skillService) {
          _classCallCheck(this, LoginPage);

          this.userService = userService;
          this.router = router;
          this.toastController = toastController;
          this.alertController = alertController;
          this.skillService = skillService;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "errorLogin",
          value: function errorLogin(head, subHead, btnTex, navigate) {
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
                        color: 'myPrimary',
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
          key: "getSkill",
          value: function getSkill(id) {
            this.skillService.getSkill(id).subscribe(function (res) {
              if (res.status) {
                src_app_models_util__WEBPACK_IMPORTED_MODULE_3__["Util"].setStorageSkill(res.data);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "verifyUser",
          value: function verifyUser() {
            var _this2 = this;

            this.userService.getUser(this.user.email).subscribe(function (res) {
              if (res.data == null) {
                _this2.toast('Email no registrado!', 'Intenta de nuevo o crea una cuenta para poder entrar!', 3000);

                _this2.router.navigate(['/login']);

                _this2.user.email = '';
                _this2.user.password = '';
              } else {
                if (res.data.password === _this2.user.password) {
                  _this2.toast('Bienvenido al foro', '', 1000);

                  src_app_models_util__WEBPACK_IMPORTED_MODULE_3__["Util"].setStorageUser(res.data);

                  _this2.getSkill(res.data._id);

                  _this2.router.navigate(['/events']);
                } else {
                  _this2.toast('Contraseña incorrecta!', 'La contraseña que ingreso no coincide con el email', 2000);

                  _this2.router.navigate(['/login']);

                  _this2.user.password = '';
                }
              }
            }, function (err) {
              _this2.errorLogin('ERROR DE SERVIDOR', err.message, 'OK', 'login');
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_7__["SkillsService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/user/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-login-login-module-es5.js.map