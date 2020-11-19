(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-users-users-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserUsersUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"headerColor\">\n    <ion-title>Usuarios (Admin)\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ios\">\n\n  <ion-list>\n\n    <ion-item *ngFor=\"let user of usersList\">\n\n      <ion-thumbnail  slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n        <ion-button color=\"danger\" (click)=\"confirmDelete(user._id)\">  <ion-icon name=\"trash\"></ion-icon> </ion-button>\n        <ion-button color=\"secondary\" (click)=\"presentActionSheet(user._id)\">  <ion-icon name=\"lock-open\"></ion-icon> </ion-button>\n      </ion-thumbnail >\n      <ion-label class=\"ion-text-wrap\">\n        <strong>{{ user.name + ' ' + user.lastName}}</strong>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Rol: </strong> {{ (user.permission == 0) ? 'Usuario' :'Admin' }}</ion-text>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Código: </strong> {{ user.code }}</ion-text>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Email: </strong> {{ user.email }}</ion-text>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/user/users/users-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/user/users/users-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: UsersPageRoutingModule */

    /***/
    function srcAppPagesUserUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
        return UsersPageRoutingModule;
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


      var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users.page */
      "./src/app/pages/user/users/users.page.ts");

      var routes = [{
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
      }];

      var UsersPageRoutingModule = function UsersPageRoutingModule() {
        _classCallCheck(this, UsersPageRoutingModule);
      };

      UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/user/users/users.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/user/users/users.module.ts ***!
      \**************************************************/

    /*! exports provided: UsersPageModule */

    /***/
    function srcAppPagesUserUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
        return UsersPageModule;
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


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-routing.module */
      "./src/app/pages/user/users/users-routing.module.ts");
      /* harmony import */


      var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users.page */
      "./src/app/pages/user/users/users.page.ts");

      var UsersPageModule = function UsersPageModule() {
        _classCallCheck(this, UsersPageModule);
      };

      UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
      })], UsersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/user/users/users.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/user/users/users.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserUsersUsersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcnMvdXNlcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/user/users/users.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/user/users/users.page.ts ***!
      \************************************************/

    /*! exports provided: UsersPage */

    /***/
    function srcAppPagesUserUsersUsersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
        return UsersPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var UsersPage = /*#__PURE__*/function () {
        function UsersPage(userService, actionSheetController, alertController) {
          _classCallCheck(this, UsersPage);

          this.userService = userService;
          this.actionSheetController = actionSheetController;
          this.alertController = alertController;
          this.usersList = new Array();
        }

        _createClass(UsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUsers();
          }
        }, {
          key: "confirmPermission",
          value: function confirmPermission(pmsn, id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Estas seguro que deseas conceder el permiso de ' + (pmsn === 0 ? ' solo USUARIO' : 'ADMINISTRADOR') + '?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this.changePermission(pmsn, id);
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
          key: "confirmDelete",
          value: function confirmDelete(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Estas seguro que deseas eliminar este usuario?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          role: 'danger',
                          handler: function handler() {
                            _this2.deleteUser(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Permisos',
                        mode: 'ios',
                        buttons: [{
                          text: 'Administrador',
                          icon: '',
                          handler: function handler() {
                            _this3.confirmPermission(1, id);
                          }
                        }, {
                          text: 'Usuario',
                          icon: '',
                          handler: function handler() {
                            _this3.confirmPermission(0, id);
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this4 = this;

            this.userService.getUsers().subscribe(function (res) {
              _this4.usersList = res.data;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "changePermission",
          value: function changePermission(pmsn, id) {
            var _this5 = this;

            this.userService.updatePermission(pmsn, id).subscribe(function (res) {
              if (res.status) {
                var ind = _this5.usersList.findIndex(function (user) {
                  return user._id === res.data._id;
                });

                _this5.usersList[ind].permission = pmsn;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this6 = this;

            this.userService.deleteUser(id).subscribe(function (res) {
              if (res.status) {
                var ind = _this6.usersList.findIndex(function (user) {
                  return user._id === res.data._id;
                });

                _this6.usersList.splice(ind, 1);
              }
            }, function (err) {});
          }
        }]);

        return UsersPage;
      }();

      UsersPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users.page.scss */
        "./src/app/pages/user/users/users.page.scss"))["default"]]
      })], UsersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-users-users-module-es5.js.map