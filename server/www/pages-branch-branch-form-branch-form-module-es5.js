(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-branch-branch-form-branch-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branch-form/branch-form.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branch-form/branch-form.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBranchBranchFormBranchFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"headerColor\">\n    <ion-title> Nueva Rama </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #formBranch=\"ngForm\">\n    <ion-list>\n      \n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Nombre del rama:</ion-label>\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"branch.name\" minlength=\"4\" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"floating\" color=\"medium\">Descripción:</ion-label>\n      <ion-textarea name=\"body\" [(ngModel)]=\"branch.description\" minlength=\"4\" required></ion-textarea>\n    </ion-item>\n    \n  </ion-list>\n</form>\n\n  <section>\n    <ion-button *ngIf=\"id == '0'; else elseOpt\" expand=\"full\"  \n    [disabled]=\"!formBranch.valid\" (click)=\"createBranch()\" color=\"myPrimaryDark\">\n      AGREGAR \n    </ion-button>\n    <ng-template #elseOpt>\n      <ion-button expand=\"full\" (click)=\"updateBranch()\" color=\"myPrimaryDark\"> ACTUALIZAR </ion-button>\n    </ng-template>\n  </section>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/branch/branch-form/branch-form-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/branch/branch-form/branch-form-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: BranchFormPageRoutingModule */

    /***/
    function srcAppPagesBranchBranchFormBranchFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchFormPageRoutingModule", function () {
        return BranchFormPageRoutingModule;
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


      var _branch_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./branch-form.page */
      "./src/app/pages/branch/branch-form/branch-form.page.ts");

      var routes = [{
        path: '',
        component: _branch_form_page__WEBPACK_IMPORTED_MODULE_3__["BranchFormPage"]
      }];

      var BranchFormPageRoutingModule = function BranchFormPageRoutingModule() {
        _classCallCheck(this, BranchFormPageRoutingModule);
      };

      BranchFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BranchFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/branch/branch-form/branch-form.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/branch/branch-form/branch-form.module.ts ***!
      \****************************************************************/

    /*! exports provided: BranchFormPageModule */

    /***/
    function srcAppPagesBranchBranchFormBranchFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchFormPageModule", function () {
        return BranchFormPageModule;
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


      var _branch_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./branch-form-routing.module */
      "./src/app/pages/branch/branch-form/branch-form-routing.module.ts");
      /* harmony import */


      var _branch_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./branch-form.page */
      "./src/app/pages/branch/branch-form/branch-form.page.ts");

      var BranchFormPageModule = function BranchFormPageModule() {
        _classCallCheck(this, BranchFormPageModule);
      };

      BranchFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _branch_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["BranchFormPageRoutingModule"]],
        declarations: [_branch_form_page__WEBPACK_IMPORTED_MODULE_6__["BranchFormPage"]]
      })], BranchFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/branch/branch-form/branch-form.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/pages/branch/branch-form/branch-form.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBranchBranchFormBranchFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaC9icmFuY2gtZm9ybS9icmFuY2gtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/branch/branch-form/branch-form.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/branch/branch-form/branch-form.page.ts ***!
      \**************************************************************/

    /*! exports provided: BranchFormPage */

    /***/
    function srcAppPagesBranchBranchFormBranchFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchFormPage", function () {
        return BranchFormPage;
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


      var src_app_models_branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/branch */
      "./src/app/models/branch.ts");
      /* harmony import */


      var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/branch.service */
      "./src/app/services/branch.service.ts");

      var BranchFormPage = /*#__PURE__*/function () {
        function BranchFormPage(activatedRoute, branchService, alertController, router) {
          _classCallCheck(this, BranchFormPage);

          this.activatedRoute = activatedRoute;
          this.branchService = branchService;
          this.alertController = alertController;
          this.router = router;
          this.branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_4__["Branch"]();
        }

        _createClass(BranchFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.id = this.activatedRoute.snapshot.params.id;
            this.getBranch(this.id);
          }
        }, {
          key: "navigateAlert",
          value: function navigateAlert(head, subHead, btnTex, navigate) {
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
          key: "getBranch",
          value: function getBranch(id) {
            var _this2 = this;

            if (id !== '0') {
              this.branchService.getBranchById(id).subscribe(function (res) {
                if (res.status) {
                  _this2.branch = res.data;
                } else {
                  _this2.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de esta rama', 'OK', 'branches');
                }
              }, function (err) {
                _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'branches');
              });
            } else {
              this.branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_4__["Branch"]();
            }
          }
        }, {
          key: "createBranch",
          value: function createBranch() {
            var _this3 = this;

            this.branchService.createBranch(this.branch).subscribe(function (res) {
              if (res.status) {
                _this3.navigateAlert('RAMA CREADA!', 'Creaste una nueva rama', 'OK', 'branches');
              } else {
                _this3.navigateAlert('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear la rama', 'OK', 'branches');
              }
            }, function (err) {
              _this3.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
            });
          }
        }, {
          key: "updateBranch",
          value: function updateBranch() {
            var _this4 = this;

            this.branchService.updateBranch(this.branch).subscribe(function (res) {
              if (res.status) {
                _this4.navigateAlert('!RAMA MODIFICADA!', 'Modificaste esta rama', 'OK', 'branches');
              } else {
                _this4.navigateAlert('¡ERROR AL MODIFICAR!', 'Hubo un problema al modificar esta rama', 'OK', 'branch');
              }
            }, function (err) {
              _this4.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'branch');
            });
          }
        }]);

        return BranchFormPage;
      }();

      BranchFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BranchFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branch-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./branch-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/branch/branch-form/branch-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./branch-form.page.scss */
        "./src/app/pages/branch/branch-form/branch-form.page.scss"))["default"]]
      })], BranchFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-branch-branch-form-branch-form-module-es5.js.map