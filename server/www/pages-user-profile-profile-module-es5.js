(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"headerColor\">\r\n    <ion-title>Mi perfil {{ (user.permission == 1) ? '(Admin)' : ''}}\r\n\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"center-content\">\r\n          <ion-avatar class=\"big-size\">\r\n            <img src=\"assets/icon/avatar.png\">\r\n          </ion-avatar>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <form #userForm=\"ngForm\">\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Nombre: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"text\" (dblclick)=\"enableInput($event.target)\" [(ngModel)]=\"user.name\"\r\n          name=\"name\" readonly required></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Apellidos: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"text\" (dblclick)=\"enableInput($event.target)\" [(ngModel)]=\"user.lastName\"\r\n          name=\"lastName\" required readonly></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Email: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" disabled></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Edad: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"text\" (dblclick)=\"enableInput($event.target)\" [(ngModel)]=\"user.age\"\r\n          name=\"age\" required readonly></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Codigo: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"text\" (dblclick)=\"enableInput($event.target)\" [(ngModel)]=\"user.code\"\r\n          name=\"code\" required readonly></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Carrera: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"text\" (dblclick)=\"enableInput($event.target)\" [(ngModel)]=\"user.career\"\r\n          name=\"career\" required readonly></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label class=\"text-label\"> Contraseña: </ion-label>\r\n        <ion-input class=\"text-input\" type=\"password\" (dblclick)=\"enableInput($event.target)\"\r\n          [(ngModel)]=\"user.password\" name=\"password\" required readonly></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-button expand=\"full\" color=\"myPrimaryDark\" style=\"font-family: Arial, Helvetica, sans-serif;\" (click)=\"updateUser()\" [disabled]=\"!userForm.valid\">Actualizar\r\n    </ion-button>\r\n  </form>\r\n\r\n  <ion-item>\r\n    <ion-button slot=\"end\" color=\"success\" (click)=\"editSkills()\">Editar <ion-icon name=\"create\" class=\"icon\"></ion-icon></ion-button>\r\n    <ion-label>\r\n      <ion-text color=\"dark\"> Tus habilidades: </ion-text>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let branch of skill.skills\">\r\n      <ion-label>\r\n        <ion-text color=\"dark\"> {{ branch.name }} </ion-text>\r\n        <ion-text color=\"medium\"> {{ ' (' + branch.description + ')' }}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/user/profile/profile-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/user/profile/profile-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesUserProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/user/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/user/profile/profile.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/user/profile/profile.module.ts ***!
      \******************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesUserProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/user/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/user/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/user/profile/profile.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/user/profile/profile.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center-content {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.big-size {\n  width: 150px;\n  height: 150px;\n}\n\n.text-label {\n  font-size: 18px;\n}\n\n.text-input {\n  font-size: 16px;\n  color: #143677;\n}\n\n.text-input[readonly] {\n  color: #919191;\n}\n\nion-content {\n  --background: white;\n}\n\n.icon {\n  padding-bottom: 2px;\n  padding-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItY29udGVudHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iaWctc2l6ZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4udGV4dC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRleHQtaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiKDIwLCA1NCwgMTE5KTtcclxufVxyXG5cclxuLnRleHQtaW5wdXRbcmVhZG9ubHldIHtcclxuICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/user/profile/profile.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/user/profile/profile.page.ts ***!
      \****************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesUserProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/skills.service */
      "./src/app/services/skills.service.ts");
      /* harmony import */


      var src_app_models_skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/skill */
      "./src/app/models/skill.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(userService, toastController, skillService, router) {
          _classCallCheck(this, ProfilePage);

          this.userService = userService;
          this.toastController = toastController;
          this.skillService = skillService;
          this.router = router;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.skill = new src_app_models_skill__WEBPACK_IMPORTED_MODULE_6__["Skill"]();
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_8__["Util"].getStorageUser();
            this.getSkill();
          }
        }, {
          key: "toastMessage",
          value: function toastMessage(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 1500
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var _this = this;

            this.userService.updateUser(this.user).subscribe(function (res) {
              if (res.status) {
                _this.user = res.data;
                src_app_models_util__WEBPACK_IMPORTED_MODULE_8__["Util"].setStorageUser(_this.user);

                _this.toastMessage('Se actualizo la informacion del usuario');
              } else {
                _this.toastMessage('Hubo un problema al actualizar la infomacion del usuario');
              }
            }, function (err) {
              _this.toastMessage('Problema al conectar con el servidor.');
            });
          }
        }, {
          key: "getSkill",
          value: function getSkill() {
            var _this2 = this;

            this.skillService.getSkill(this.user._id).subscribe(function (res) {
              if (res.status) {
                _this2.skill = res.data;
              } else {
                _this2.toastMessage('Hubo un problema al obtener la infomación del usuario');
              }
            }, function (err) {
              _this2.toastMessage('Problema al conectar con el servidor.');
            });
          }
        }, {
          key: "editSkills",
          value: function editSkills() {
            this.router.navigate(['/skill-update/' + this.user._id]);
          }
        }, {
          key: "enableInput",
          value: function enableInput(input) {
            input.readOnly = false;
            input.style.color = 'rgb(20, 54, 119)';
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/user/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-profile-profile-module-es5.js.map