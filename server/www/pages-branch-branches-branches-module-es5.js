(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-branch-branches-branches-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branches/branches.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branches/branches.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBranchBranchesBranchesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"headerColor\">\n    <ion-title>Ramas (Admin)\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let branch of branchList\">\n    <ion-card-header color=\"headerColor\" style=\"margin-bottom: 10px; padding: 10px;\">\n      <ion-card-title>\n        <ion-text style=\"font-size: 16px;\">\n          <strong> {{ branch.name }} </strong>\n        </ion-text>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content color=\"light\" style=\"font-size: 16px;\"> {{ branch.description }} </ion-card-content>\n\n    <ion-footer>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button color=\"myPrimary\" (click)=\"editBranch(branch._id)\"> EDITAR\n            <ion-icon name=\"create\" style=\"padding-left: 4px;\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n          <ion-button color=\"danger\" (click)=\"confirmClose(branch._id)\"> ELIMINAR\n            <ion-icon name=\"close-circle\" style=\"padding-left: 2px;\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button size=\"small\" color=\"success\" routerLink=\"/branch-form/0\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/branch/branches/branches-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/branch/branches/branches-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: BranchesPageRoutingModule */

    /***/
    function srcAppPagesBranchBranchesBranchesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPageRoutingModule", function () {
        return BranchesPageRoutingModule;
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


      var _branches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./branches.page */
      "./src/app/pages/branch/branches/branches.page.ts");

      var routes = [{
        path: '',
        component: _branches_page__WEBPACK_IMPORTED_MODULE_3__["BranchesPage"]
      }];

      var BranchesPageRoutingModule = function BranchesPageRoutingModule() {
        _classCallCheck(this, BranchesPageRoutingModule);
      };

      BranchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BranchesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/branch/branches/branches.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/branch/branches/branches.module.ts ***!
      \**********************************************************/

    /*! exports provided: BranchesPageModule */

    /***/
    function srcAppPagesBranchBranchesBranchesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPageModule", function () {
        return BranchesPageModule;
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


      var _branches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./branches-routing.module */
      "./src/app/pages/branch/branches/branches-routing.module.ts");
      /* harmony import */


      var _branches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./branches.page */
      "./src/app/pages/branch/branches/branches.page.ts");

      var BranchesPageModule = function BranchesPageModule() {
        _classCallCheck(this, BranchesPageModule);
      };

      BranchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _branches_routing_module__WEBPACK_IMPORTED_MODULE_5__["BranchesPageRoutingModule"]],
        declarations: [_branches_page__WEBPACK_IMPORTED_MODULE_6__["BranchesPage"]]
      })], BranchesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/branch/branches/branches.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/branch/branches/branches.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBranchBranchesBranchesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaC9icmFuY2hlcy9icmFuY2hlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/branch/branches/branches.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/branch/branches/branches.page.ts ***!
      \********************************************************/

    /*! exports provided: BranchesPage */

    /***/
    function srcAppPagesBranchBranchesBranchesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPage", function () {
        return BranchesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");
      /* harmony import */


      var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/branch.service */
      "./src/app/services/branch.service.ts");

      var BranchesPage = /*#__PURE__*/function () {
        function BranchesPage(branchService, alertController, router) {
          _classCallCheck(this, BranchesPage);

          this.branchService = branchService;
          this.alertController = alertController;
          this.router = router;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
          this.branchList = new Array();
        }

        _createClass(BranchesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_5__["Util"].getStorageUser();
            this.getBranches();
          }
        }, {
          key: "getBranches",
          value: function getBranches() {
            var _this = this;

            this.branchService.getBranches().subscribe(function (res) {
              if (res.status) {
                _this.branchList = res.data;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "deleteBranch",
          value: function deleteBranch(id) {
            var _this2 = this;

            this.branchService.deleteBranch(id).subscribe(function (res) {
              if (res.status) {
                var ind = _this2.branchList.findIndex(function (branch) {
                  return branch._id === res.data._id;
                });

                _this2.branchList.splice(ind, 1);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "editBranch",
          value: function editBranch(id) {
            this.router.navigate(['/branch-form/' + id]);
          }
        }, {
          key: "confirmClose",
          value: function confirmClose(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Esta seguro que desea eliminar esta rama, ya no se podra recuperar.',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this3.deleteBranch(id);
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
        }]);

        return BranchesPage;
      }();

      BranchesPage.ctorParameters = function () {
        return [{
          type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BranchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branches',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./branches.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branches/branches.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./branches.page.scss */
        "./src/app/pages/branch/branches/branches.page.scss"))["default"]]
      })], BranchesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-branch-branches-branches-module-es5.js.map