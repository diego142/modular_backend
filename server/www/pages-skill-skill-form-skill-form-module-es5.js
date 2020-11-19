(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skill-skill-form-skill-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-form/skill-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-form/skill-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSkillSkillFormSkillFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Habilidades del alumno</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-text color=\"medium\">\r\n      <div class=\"ion-text-center\">\r\n        Por favor marca la(s) habilidad(es) que posees. Con esto podras apoyar a la comunidad de alumnos.\r\n      </div>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let check of checkList\">\r\n      <ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"check.isCheck\" (ionChange)=\"validateForm()\"></ion-checkbox>\r\n      <ion-label>{{ check.name }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"createSkill()\" [disabled]=\"!formValid\">Guardar</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" color=\"danger\" (click)=\"skip()\">Omitir <ion-icon style=\"padding-left: 2px;\" name=\"close-circle\"></ion-icon></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/skill/skill-form/skill-form-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/skill/skill-form/skill-form-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SkillFormPageRoutingModule */

    /***/
    function srcAppPagesSkillSkillFormSkillFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillFormPageRoutingModule", function () {
        return SkillFormPageRoutingModule;
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


      var _skill_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./skill-form.page */
      "./src/app/pages/skill/skill-form/skill-form.page.ts");

      var routes = [{
        path: '',
        component: _skill_form_page__WEBPACK_IMPORTED_MODULE_3__["SkillFormPage"]
      }];

      var SkillFormPageRoutingModule = function SkillFormPageRoutingModule() {
        _classCallCheck(this, SkillFormPageRoutingModule);
      };

      SkillFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SkillFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/skill/skill-form/skill-form.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/skill/skill-form/skill-form.module.ts ***!
      \*************************************************************/

    /*! exports provided: SkillFormPageModule */

    /***/
    function srcAppPagesSkillSkillFormSkillFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillFormPageModule", function () {
        return SkillFormPageModule;
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


      var _skill_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skill-form-routing.module */
      "./src/app/pages/skill/skill-form/skill-form-routing.module.ts");
      /* harmony import */


      var _skill_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./skill-form.page */
      "./src/app/pages/skill/skill-form/skill-form.page.ts");

      var SkillFormPageModule = function SkillFormPageModule() {
        _classCallCheck(this, SkillFormPageModule);
      };

      SkillFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _skill_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkillFormPageRoutingModule"]],
        declarations: [_skill_form_page__WEBPACK_IMPORTED_MODULE_6__["SkillFormPage"]]
      })], SkillFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/skill/skill-form/skill-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/skill/skill-form/skill-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSkillSkillFormSkillFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n}\n\nion-button {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGwvc2tpbGwtZm9ybS9za2lsbC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9za2lsbC9za2lsbC1mb3JtL3NraWxsLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/skill/skill-form/skill-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/skill/skill-form/skill-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: SkillFormPage */

    /***/
    function srcAppPagesSkillSkillFormSkillFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillFormPage", function () {
        return SkillFormPage;
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


      var src_app_models_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/branch */
      "./src/app/models/branch.ts");
      /* harmony import */


      var src_app_models_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/check */
      "./src/app/models/check.ts");
      /* harmony import */


      var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/skills.service */
      "./src/app/services/skills.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_skill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/skill */
      "./src/app/models/skill.ts");

      var SkillFormPage = /*#__PURE__*/function () {
        function SkillFormPage(branchService, skillService, activatedRoute, alertController, router) {
          _classCallCheck(this, SkillFormPage);

          this.branchService = branchService;
          this.skillService = skillService;
          this.activatedRoute = activatedRoute;
          this.alertController = alertController;
          this.router = router;
          this.branchList = new Array();
          this.checkList = new Array();
        }

        _createClass(SkillFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userId = this.activatedRoute.snapshot.params.id;
            this.getBranches();
            this.formValid = false;
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
          key: "getBranches",
          value: function getBranches() {
            var _this2 = this;

            this.branchService.getBranches().subscribe(function (res) {
              if (res.status) {
                _this2.branchList = res.data;

                _this2.fillList();
              } else {
                _this2.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'profile');
              }
            }, function (err) {
              _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'profile');
            });
          }
        }, {
          key: "fillList",
          value: function fillList() {
            var _iterator = _createForOfIteratorHelper(this.branchList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var branch = _step.value;
                var check = new src_app_models_check__WEBPACK_IMPORTED_MODULE_3__["Check"]();
                check.id = branch._id;
                check.name = branch.name;
                check.isCheck = false;
                this.checkList.push(check);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "createSkill",
          value: function createSkill() {
            var _this3 = this;

            var skill = new src_app_models_skill__WEBPACK_IMPORTED_MODULE_8__["Skill"]();
            skill.user._id = this.userId;

            var _iterator2 = _createForOfIteratorHelper(this.checkList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var check = _step2.value;

                if (check.isCheck) {
                  var branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_2__["Branch"]();
                  branch._id = check.id;
                  skill.skills.push(branch);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.skillService.createSkill(skill).subscribe(function (res) {
              if (res.status) {
                _this3.navigateAlert('¡REGISTRO EXITOSO!', 'Puedes editar tus datos en tu perfil', 'OK', 'profile'); //Set local storage

              } else {
                _this3.navigateAlert('¡ERROR AL AGREGAR LOS SKILLS!', 'Hubo un problema al intentar crear este skill', 'OK', 'profile');
              }
            }, function (err) {
              _this3.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'profile');
            });
          }
        }, {
          key: "skip",
          value: function skip() {
            var _this4 = this;

            var skill = new src_app_models_skill__WEBPACK_IMPORTED_MODULE_8__["Skill"]();
            skill.user._id = this.userId;
            this.skillService.createSkill(skill).subscribe(function (res) {
              if (res.status) {
                _this4.navigateAlert('¡REGISTRO EXITOSO!', 'Puedes agregar tus habilidades mas tarde en tu perfil.', 'OK', 'profile');
              } else {
                _this4.navigateAlert('¡ERROR AL AGREGAR LOS SKILLS!', 'Hubo un problema al intentar crear este skill', 'OK', 'profile');
              }
            }, function (err) {
              _this4.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'profile');
            });
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            var _iterator3 = _createForOfIteratorHelper(this.checkList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var check = _step3.value;

                if (check.isCheck) {
                  this.formValid = true;
                  return;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.formValid = false;
          }
        }]);

        return SkillFormPage;
      }();

      SkillFormPage.ctorParameters = function () {
        return [{
          type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]
        }, {
          type: src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      SkillFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./skill-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-form/skill-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./skill-form.page.scss */
        "./src/app/pages/skill/skill-form/skill-form.page.scss"))["default"]]
      })], SkillFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-skill-skill-form-skill-form-module-es5.js.map