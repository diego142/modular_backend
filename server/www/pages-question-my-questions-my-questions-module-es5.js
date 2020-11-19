(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-my-questions-my-questions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/my-questions/my-questions.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/my-questions/my-questions.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesQuestionMyQuestionsMyQuestionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Mis preguntas\r\n    </ion-title>\r\n    <!-- <ion-icon name=\"help-circle-outline\"></ion-icon> -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-button color=\"success\" expand=\"block\" slot=\"end\" (click)=\"newQuestion()\">\r\n      Pregunta\r\n      <ion-icon style=\"margin-left: 8px; margin-bottom: 2px;\" name=\"add-circle\"></ion-icon>\r\n    </ion-button>\r\n    <ion-label> <strong> Haz tu pregunta aqui. </strong> </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-text color=\"medium\">\r\n    <div class=\"ion-text-center\" style=\"margin-top: 4px;\">\r\n      {{( myQuestions.length < 1) ? 'Aun no has hecho ninguna pregunta' : 'Tus preguntas.'}}\r\n    </div>\r\n  </ion-text>\r\n\r\n  <ion-list>\r\n\r\n    <ion-card *ngFor=\"let question of myQuestions\">\r\n      <ion-card-header color=\"myPrimary\" style=\"margin-bottom: 10px; padding: 10px;\">\r\n        <ion-card-title>\r\n          <ion-text color=\"myPrimaryText\" style=\"font-size: 16px;\">\r\n            <strong> {{ question.title }} </strong>\r\n          </ion-text>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"font-size: 16px;\"> {{ question.body }} </ion-card-content>\r\n\r\n      <ion-footer>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-button color=\"tertiary\" (click)=\"viewQuestion(question._id)\"> VER\r\n              <ion-icon name=\"eye\" style=\"padding-left: 4px;\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"question.open\" class=\"ion-text-center\">\r\n            <ion-button color=\"myPrimary\" (click)=\"updateQuestion(question._id)\"> EDITAR\r\n              <ion-icon name=\"create\" style=\"padding-left: 4px;\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"question.open\" class=\"ion-text-center\">\r\n            <ion-button color=\"danger\" (click)=\"confirmClose(question._id)\"> CERRAR\r\n              <ion-icon name=\"close-circle\" style=\"padding-left: 2px;\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-footer>\r\n    </ion-card>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/question/my-questions/my-questions-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/question/my-questions/my-questions-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: MyQuestionsPageRoutingModule */

    /***/
    function srcAppPagesQuestionMyQuestionsMyQuestionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQuestionsPageRoutingModule", function () {
        return MyQuestionsPageRoutingModule;
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


      var _my_questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-questions.page */
      "./src/app/pages/question/my-questions/my-questions.page.ts");

      var routes = [{
        path: '',
        component: _my_questions_page__WEBPACK_IMPORTED_MODULE_3__["MyQuestionsPage"]
      }];

      var MyQuestionsPageRoutingModule = function MyQuestionsPageRoutingModule() {
        _classCallCheck(this, MyQuestionsPageRoutingModule);
      };

      MyQuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyQuestionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/question/my-questions/my-questions.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/question/my-questions/my-questions.module.ts ***!
      \********************************************************************/

    /*! exports provided: MyQuestionsPageModule */

    /***/
    function srcAppPagesQuestionMyQuestionsMyQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQuestionsPageModule", function () {
        return MyQuestionsPageModule;
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


      var _my_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-questions-routing.module */
      "./src/app/pages/question/my-questions/my-questions-routing.module.ts");
      /* harmony import */


      var _my_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-questions.page */
      "./src/app/pages/question/my-questions/my-questions.page.ts");

      var MyQuestionsPageModule = function MyQuestionsPageModule() {
        _classCallCheck(this, MyQuestionsPageModule);
      };

      MyQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQuestionsPageRoutingModule"]],
        declarations: [_my_questions_page__WEBPACK_IMPORTED_MODULE_6__["MyQuestionsPage"]]
      })], MyQuestionsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/question/my-questions/my-questions.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/pages/question/my-questions/my-questions.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesQuestionMyQuestionsMyQuestionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-card-title {\n  --color: #607D8B;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-card {\n  --background: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vbXktcXVlc3Rpb25zL215LXF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vbXktcXVlc3Rpb25zL215LXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIC0tY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/question/my-questions/my-questions.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/question/my-questions/my-questions.page.ts ***!
      \******************************************************************/

    /*! exports provided: MyQuestionsPage */

    /***/
    function srcAppPagesQuestionMyQuestionsMyQuestionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQuestionsPage", function () {
        return MyQuestionsPage;
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


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/question.service */
      "./src/app/services/question.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");

      var MyQuestionsPage = /*#__PURE__*/function () {
        function MyQuestionsPage(questionService, router, alertController, toastController) {
          _classCallCheck(this, MyQuestionsPage);

          this.questionService = questionService;
          this.router = router;
          this.alertController = alertController;
          this.toastController = toastController;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.myQuestions = new Array();
        }

        _createClass(MyQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getStorageUser();
            this.getQuestions();
          }
        }, {
          key: "toast",
          value: function toast(msg) {
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
          key: "getQuestions",
          value: function getQuestions() {
            var _this = this;

            this.questionService.getQuestionByUserId(this.user._id).subscribe(function (res) {
              _this.myQuestions = res.data.reverse();
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "viewQuestion",
          value: function viewQuestion(id) {
            this.router.navigate(['/question-view/' + id]);
          }
        }, {
          key: "newQuestion",
          value: function newQuestion() {
            this.router.navigate(['/question-form/' + 0]);
          }
        }, {
          key: "updateQuestion",
          value: function updateQuestion(id) {
            this.router.navigate(['/question-form/' + id]);
          }
        }, {
          key: "closeQuestion",
          value: function closeQuestion(id) {
            var _this2 = this;

            this.questionService.closeQuestion(id).subscribe(function (res) {
              var ind = _this2.myQuestions.findIndex(function (quest) {
                return quest._id === res.data._id;
              });

              _this2.myQuestions[ind].open = false;

              _this2.toast('La pregunta se ha cerrado');
            }, function (err) {
              _this2.toast('No se pudo cerrar la pregunta, revise su conexión');
            });
          }
        }, {
          key: "confirmClose",
          value: function confirmClose(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Esta seguro que desea cerrar esta pregunta? Nadie mas podra contestarla.',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this3.closeQuestion(id);
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

        return MyQuestionsPage;
      }();

      MyQuestionsPage.ctorParameters = function () {
        return [{
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      MyQuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-questions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-questions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/my-questions/my-questions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-questions.page.scss */
        "./src/app/pages/question/my-questions/my-questions.page.scss"))["default"]]
      })], MyQuestionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-question-my-questions-my-questions-module-es5.js.map