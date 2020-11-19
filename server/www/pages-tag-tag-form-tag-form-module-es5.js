(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tag-tag-form-tag-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTagTagFormTagFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Agregar etiquetas\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-text color=\"medium\">\r\n      <div class=\"ion-text-center\">\r\n        Por favor marca la(s) categoria(s) a la que pertenece tu pregunta.\r\n      </div>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let check of checkList\">\r\n      <ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"check.isCheck\" (ionChange)=\"validateForm()\"></ion-checkbox>\r\n      <ion-label>{{check.name}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"createTag()\" [disabled]=\"!formValid\">Enviar</ion-button>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/tag/tag-form/tag-form-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/tag/tag-form/tag-form-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: TagFormPageRoutingModule */

    /***/
    function srcAppPagesTagTagFormTagFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagFormPageRoutingModule", function () {
        return TagFormPageRoutingModule;
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


      var _tag_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tag-form.page */
      "./src/app/pages/tag/tag-form/tag-form.page.ts");

      var routes = [{
        path: '',
        component: _tag_form_page__WEBPACK_IMPORTED_MODULE_3__["TagFormPage"]
      }];

      var TagFormPageRoutingModule = function TagFormPageRoutingModule() {
        _classCallCheck(this, TagFormPageRoutingModule);
      };

      TagFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TagFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tag/tag-form/tag-form.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/tag/tag-form/tag-form.module.ts ***!
      \*******************************************************/

    /*! exports provided: TagFormPageModule */

    /***/
    function srcAppPagesTagTagFormTagFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagFormPageModule", function () {
        return TagFormPageModule;
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


      var _tag_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tag-form-routing.module */
      "./src/app/pages/tag/tag-form/tag-form-routing.module.ts");
      /* harmony import */


      var _tag_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tag-form.page */
      "./src/app/pages/tag/tag-form/tag-form.page.ts");

      var TagFormPageModule = function TagFormPageModule() {
        _classCallCheck(this, TagFormPageModule);
      };

      TagFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tag_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagFormPageRoutingModule"]],
        declarations: [_tag_form_page__WEBPACK_IMPORTED_MODULE_6__["TagFormPage"]]
      })], TagFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tag/tag-form/tag-form.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/tag/tag-form/tag-form.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTagTagFormTagFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFnL3RhZy1mb3JtL3RhZy1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWcvdGFnLWZvcm0vdGFnLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/tag/tag-form/tag-form.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/tag/tag-form/tag-form.page.ts ***!
      \*****************************************************/

    /*! exports provided: TagFormPage */

    /***/
    function srcAppPagesTagTagFormTagFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagFormPage", function () {
        return TagFormPage;
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


      var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var src_app_models_branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/branch */
      "./src/app/models/branch.ts");
      /* harmony import */


      var src_app_models_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/check */
      "./src/app/models/check.ts");
      /* harmony import */


      var src_app_models_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/tag */
      "./src/app/models/tag.ts");
      /* harmony import */


      var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tag.service */
      "./src/app/services/tag.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/question.service */
      "./src/app/services/question.service.ts");
      /* harmony import */


      var src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/nl.service */
      "./src/app/services/nl.service.ts");

      var TagFormPage = /*#__PURE__*/function () {
        function TagFormPage(branchService, tagService, activatedRoute, alertController, router, questionService, nlService) {
          _classCallCheck(this, TagFormPage);

          this.branchService = branchService;
          this.tagService = tagService;
          this.activatedRoute = activatedRoute;
          this.alertController = alertController;
          this.router = router;
          this.questionService = questionService;
          this.nlService = nlService;
          this.branchList = new Array();
          this.checkList = new Array();
          this.labels = [];
        }

        _createClass(TagFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.questionId = this.activatedRoute.snapshot.params.id;
            this.labels = this.activatedRoute.snapshot.queryParams.labels ? this.activatedRoute.snapshot.queryParams.labels : [];
            this.getBranches();
            this.formValid = false;
            this.addWords = false;
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
                _this2.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'my-questions');
              }
            }, function (err) {
              _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
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
                var check = new src_app_models_check__WEBPACK_IMPORTED_MODULE_4__["Check"]();
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

            this.fillCheckList();
          }
        }, {
          key: "fillCheckList",
          value: function fillCheckList() {
            var _this3 = this;

            this.addWords = this.labels.length > 0 ? false : true;
            var ind;

            var _iterator2 = _createForOfIteratorHelper(this.labels),
                _step2;

            try {
              var _loop = function _loop() {
                var lbl = _step2.value;
                ind = _this3.checkList.findIndex(function (check) {
                  return check.id === lbl;
                });
                _this3.checkList[ind].isCheck = true;
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.validateForm();
          }
        }, {
          key: "createTag",
          value: function createTag() {
            var _this4 = this;

            var tag = new src_app_models_tag__WEBPACK_IMPORTED_MODULE_5__["Tag"]();
            tag.question._id = this.questionId;

            var _iterator3 = _createForOfIteratorHelper(this.checkList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var check = _step3.value;

                if (check.isCheck) {
                  var branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_3__["Branch"]();
                  branch._id = check.id;
                  tag.tags.push(branch);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (this.addWords) {
              this.addNewWords(this.checkList);
            }

            this.tagService.createTag(tag).subscribe(function (res) {
              if (res.status) {
                _this4.navigateAlert('¡PREGUNTA ENVIADA!', 'Creaste una nueva pregunta', 'OK', 'my-questions');
              } else {
                _this4.navigateAlert('¡ERROR AL AGREGAR LOS TAGS!', 'Hubo un problema al intentar crear este tag', 'OK', 'my-questions');
              }
            }, function (err) {
              _this4.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
            });
          }
        }, {
          key: "addNewWords",
          value: function addNewWords(tags) {
            var _this5 = this;

            var brchs = new Array();

            var _iterator4 = _createForOfIteratorHelper(this.checkList),
                _step4;

            try {
              var _loop2 = function _loop2() {
                var check = _step4.value;

                var exists = _this5.labels.findIndex(function (br) {
                  return br === check.id;
                });

                if (check.isCheck && exists === -1) {
                  brchs.push(check.name);
                }
              };

              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.questionService.getQuestionById(this.questionId).subscribe(function (res) {
              if (res.status) {
                var words = res.data.title;

                _this5.nlService.addNewWords(words, brchs).subscribe(function (res) {}, function (err) {
                  console.log(err);
                });
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            var _this6 = this;

            var _iterator5 = _createForOfIteratorHelper(this.checkList),
                _step5;

            try {
              var _loop3 = function _loop3() {
                var check = _step5.value;

                var exists = _this6.labels.findIndex(function (br) {
                  return br === check.id;
                });

                if (check.isCheck && exists === -1) {
                  _this6.addWords = true;
                  return "break";
                }

                _this6.addWords = false;
              };

              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _ret = _loop3();

                if (_ret === "break") break;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var _iterator6 = _createForOfIteratorHelper(this.checkList),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var check = _step6.value;

                if (check.isCheck) {
                  this.formValid = true;
                  return;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.formValid = false;
            this.addWords = false;
          }
        }]);

        return TagFormPage;
      }();

      TagFormPage.ctorParameters = function () {
        return [{
          type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_9__["QuestionService"]
        }, {
          type: src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_10__["NlService"]
        }];
      };

      TagFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tag-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tag-form.page.scss */
        "./src/app/pages/tag/tag-form/tag-form.page.scss"))["default"]]
      })], TagFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tag-tag-form-tag-form-module-es5.js.map