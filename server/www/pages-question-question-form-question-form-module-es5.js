(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-question-form-question-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesQuestionQuestionFormQuestionFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nueva pregunta\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #formQuestion=\"ngForm\">\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        <ion-label>Fecha:</ion-label>\r\n        <ion-datetime [value]=\"today\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Tu pregunta:</ion-label>\r\n        <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"question.title\" minlength=\"10\" required\r\n          (keyup)=\"getClassifications($event.key)\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Agrega mas detalles sobre la pregunta:</ion-label>\r\n        <ion-textarea name=\"body\" [(ngModel)]=\"question.body\" minlength=\"8\" required (ionFocus)=\"getClassifications('?')\"></ion-textarea>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </form>\r\n\r\n  <section>\r\n    <ion-button *ngIf=\"this.questionId == '0'; else elseBtn\" expand=\"full\" color=\"myPrimary\" (click)=\"createQuestion()\"\r\n      [disabled]=\"!formQuestion.valid\">\r\n      PREGUNTAR\r\n    </ion-button>\r\n\r\n    <ng-template #elseBtn>\r\n      <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"updateQuestion()\" [disabled]=\"!formQuestion.valid\">\r\n        ACTUALIZAR\r\n      </ion-button>\r\n    </ng-template>\r\n  </section>\r\n\r\n  <div *ngIf=\"show\">\r\n    <ion-list>\r\n      <ion-text class=\"ion-margin-start\">Tu pregunta es de tipo:</ion-text>\r\n      <ion-item *ngFor=\"let label of labels\">\r\n        <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"getQuestions(label.ref)\">{{ label.name }}</ion-button>\r\n        <ion-text color=\"medium\" slot=\"end\">Mostrar sugerencias.</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list>\r\n\r\n      <ion-item *ngFor=\"let qtn of questionList\" (click)=\"viewQuestion(qtn._id)\">\r\n        <ion-text slot=\"end\" color=\"myPrimaryDark\"> {{qtn.date | date: 'd/M/yyyy'}} </ion-text>\r\n        <ion-label>\r\n          <h2><strong> {{ qtn.title }} </strong></h2>\r\n          <ion-text color=\"myPrimaryTextColor\">\r\n            <span> {{ qtn.body }} </span>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/question/question-form/question-form-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/question/question-form/question-form-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: QuestionFormPageRoutingModule */

    /***/
    function srcAppPagesQuestionQuestionFormQuestionFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionFormPageRoutingModule", function () {
        return QuestionFormPageRoutingModule;
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


      var _question_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./question-form.page */
      "./src/app/pages/question/question-form/question-form.page.ts");

      var routes = [{
        path: '',
        component: _question_form_page__WEBPACK_IMPORTED_MODULE_3__["QuestionFormPage"]
      }];

      var QuestionFormPageRoutingModule = function QuestionFormPageRoutingModule() {
        _classCallCheck(this, QuestionFormPageRoutingModule);
      };

      QuestionFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuestionFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/question/question-form/question-form.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/question/question-form/question-form.module.ts ***!
      \**********************************************************************/

    /*! exports provided: QuestionFormPageModule */

    /***/
    function srcAppPagesQuestionQuestionFormQuestionFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionFormPageModule", function () {
        return QuestionFormPageModule;
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


      var _question_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./question-form-routing.module */
      "./src/app/pages/question/question-form/question-form-routing.module.ts");
      /* harmony import */


      var _question_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./question-form.page */
      "./src/app/pages/question/question-form/question-form.page.ts");

      var QuestionFormPageModule = function QuestionFormPageModule() {
        _classCallCheck(this, QuestionFormPageModule);
      };

      QuestionFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _question_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionFormPageRoutingModule"]],
        declarations: [_question_form_page__WEBPACK_IMPORTED_MODULE_6__["QuestionFormPage"]]
      })], QuestionFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/question/question-form/question-form.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/question/question-form/question-form.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesQuestionQuestionFormQuestionFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-button {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24tZm9ybS9xdWVzdGlvbi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/question/question-form/question-form.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/question/question-form/question-form.page.ts ***!
      \********************************************************************/

    /*! exports provided: QuestionFormPage */

    /***/
    function srcAppPagesQuestionQuestionFormQuestionFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionFormPage", function () {
        return QuestionFormPage;
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


      var src_app_models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/question */
      "./src/app/models/question.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/question.service */
      "./src/app/services/question.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/nl.service */
      "./src/app/services/nl.service.ts");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");

      var QuestionFormPage = /*#__PURE__*/function () {
        function QuestionFormPage(activatedRoute, questionService, router, alertController, nlService) {
          _classCallCheck(this, QuestionFormPage);

          this.activatedRoute = activatedRoute;
          this.questionService = questionService;
          this.router = router;
          this.alertController = alertController;
          this.nlService = nlService;
          this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
          this.today = new Date().toISOString();
        }

        _createClass(QuestionFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.characters = [' ', '.', '?'];
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
            this.questionId = this.activatedRoute.snapshot.params.id;
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_8__["Util"].getStorageUser();
            this.getQuestion(this.questionId);
            this.show = false;
            this.questionList = Array();
            this.labels = new Array();
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
          key: "createQuestion",
          value: function createQuestion() {
            var _this2 = this;

            this.question.user._id = this.user._id;
            this.question.date = new Date();
            this.question.open = true;
            this.questionService.createQuestion(this.question).subscribe(function (res) {
              if (res.status) {
                _this2.router.navigate(['/tag-form/' + res.data._id], {
                  queryParams: {
                    labels: _this2.labels.map(function (l) {
                      return l.ref;
                    })
                  }
                });
              } else {
                _this2.navigateAlert('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear esta pregunta', 'OK', 'my-questions');
              }
            }, function (err) {
              _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
            });
          }
        }, {
          key: "updateQuestion",
          value: function updateQuestion() {
            var _this3 = this;

            this.questionService.updateQuestion(this.question).subscribe(function (res) {
              if (res.status) {
                _this3.navigateAlert('¡PREGUNTA ACTUALIZADA!', 'Actualizaste esta pregunta', 'OK', 'my-questions');
              } else {
                _this3.navigateAlert('¡ERROR AL ACTULIZAR!', 'Hubo un problema al intentar actualizar estra pregunta', 'OK', 'my-questions');
              }
            }, function (err) {
              _this3.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
            });
          }
        }, {
          key: "getQuestion",
          value: function getQuestion(id) {
            var _this4 = this;

            if (id !== '0') {
              this.questionService.getQuestionById(id).subscribe(function (res) {
                if (res.status) {
                  _this4.question = res.data;
                } else {
                  _this4.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de esta pregunta', 'OK', 'my-questions');
                }
              }, function (err) {
                _this4.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
              });
            } else {
              this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
            }
          }
        }, {
          key: "getClassifications",
          value: function getClassifications(key) {
            var _this5 = this;

            var size = this.question.title ? this.question.title.length : 0;

            if (size < 10) {
              this.labels = [];
              this.show = false;
              this.questionList = new Array();
            } else {
              if (this.characters.find(function (c) {
                return key === c;
              })) {
                this.nlService.getClassify(this.question).subscribe(function (res) {
                  if (res.data.length) {
                    _this5.labels = res.data;
                    _this5.show = true;
                  }
                }, function (err) {
                  console.log(err);
                });
              }
            }
          }
        }, {
          key: "getQuestions",
          value: function getQuestions(ref) {
            var _this6 = this;

            this.nlService.getQuestions(ref).subscribe(function (res) {
              if (res.status) {
                _this6.questionList = new Array();

                var _iterator = _createForOfIteratorHelper(res.data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var tag = _step.value;

                    _this6.questionList.push(tag.question);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "viewQuestion",
          value: function viewQuestion(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Salir de la edición?',
                        message: 'Si continuas se perdera el progreso de tu pregunta.',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Continuar',
                          cssClass: 'success',
                          handler: function handler() {
                            _this7.router.navigate(['/question-view/' + id]);
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
        }]);

        return QuestionFormPage;
      }();

      QuestionFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_6__["NlService"]
        }];
      };

      QuestionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./question-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./question-form.page.scss */
        "./src/app/pages/question/question-form/question-form.page.scss"))["default"]]
      })], QuestionFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-question-question-form-question-form-module-es5.js.map