(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-question-view-question-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-view/question-view.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-view/question-view.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesQuestionQuestionViewQuestionViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Pregunta - {{ (question.open) ? 'Abierta' : 'Cerrada' }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-item color=\"myPrimary\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label *ngIf=\"(this.question.open) && (this.user.permission == 1)\" slot=\"end\">\r\n        <ion-button color=\"danger\" (click)=\"closeQuestion(question._id)\">\r\n          <ion-label>CERRAR</ion-label>\r\n          <ion-icon slot=\"end\" name=\"close-circle\"></ion-icon>\r\n        </ion-button>\r\n      </ion-label>\r\n      <ion-label>\r\n        <ion-text color=\"myPrimaryText\">\r\n          <h2> <strong>{{question.user.name + ' ' + question.user.lastName}}</strong></h2>\r\n        </ion-text>\r\n        <ion-text color=\"myPrimaryText\">\r\n          <p class=\"date\">{{question.date | date: 'MMM d, y'}}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title color=\"myPrimaryTextColor\"> <strong> {{ question.title }} </strong></ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{question.body}}\r\n    </ion-card-content>\r\n\r\n    <ion-chip color=\"primary\" *ngFor=\"let br of tag.tags\">\r\n      <ion-label class=\"ion-text-wrap\">{{ br.name | slice:0:3 }}</ion-label><br>\r\n    </ion-chip> \r\n\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"full\">\r\n      <ion-text color=\"myPrimaryDark\">\r\n        {{(question.replys.length < 1) ? 'Nadie a respondido a esta pregunta todavia.' : 'Respuestas:'}}</ion-text>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let reply of question.replys\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-button *ngIf=\"reply.user._id == user._id\" slot=\"end\" color=\"danger\" (click)=\"confirmRemoveReply(reply._id)\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <ion-text color=\"myPrimaryTextColor\">\r\n          <h2> <strong> {{reply.user.name + ' ' + reply.user.lastName}} </strong> </h2>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p class=\"date\">{{reply.date | date: 'MMM d, y - H:mm'}}</p>\r\n        </ion-text>\r\n        <ion-text color=\"myPrimaryTextColor\" style=\"font-size: medium;\">\r\n          <span>{{ reply.reply }}</span>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <form *ngIf=\"question.open; else elseForm\" #formReply=\"ngForm\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/icon/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-textarea rows=\"3\" placeholder=\"Respoder a esta pregunta\" name=\"reply\" [(ngModel)]=\"reply.reply\" minlength=\"2\"\r\n        required></ion-textarea>\r\n      <ion-button [disabled]=\"!formReply.valid\" style=\"margin-top: 25px;\" slot=\"end\" color=\"light\"\r\n        (click)=\"confirmAddReply()\">\r\n        <ion-icon name=\"send\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </form>\r\n\r\n  <ng-template #elseForm>\r\n    <ion-text color=\"medium\">\r\n      <div class=\"ion-text-center\">\r\n        Pregunta cerrada, no puedes responder a esta pregunta.\r\n      </div>\r\n    </ion-text>\r\n  </ng-template>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/models/reply.ts":
    /*!*********************************!*\
      !*** ./src/app/models/reply.ts ***!
      \*********************************/

    /*! exports provided: Reply */

    /***/
    function srcAppModelsReplyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Reply", function () {
        return Reply;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/models/user.ts");

      var Reply = function Reply() {
        _classCallCheck(this, Reply);

        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
      };
      /***/

    },

    /***/
    "./src/app/pages/question/question-view/question-view-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/question/question-view/question-view-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: QuestionViewPageRoutingModule */

    /***/
    function srcAppPagesQuestionQuestionViewQuestionViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionViewPageRoutingModule", function () {
        return QuestionViewPageRoutingModule;
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


      var _question_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./question-view.page */
      "./src/app/pages/question/question-view/question-view.page.ts");

      var routes = [{
        path: '',
        component: _question_view_page__WEBPACK_IMPORTED_MODULE_3__["QuestionViewPage"]
      }];

      var QuestionViewPageRoutingModule = function QuestionViewPageRoutingModule() {
        _classCallCheck(this, QuestionViewPageRoutingModule);
      };

      QuestionViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuestionViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/question/question-view/question-view.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/question/question-view/question-view.module.ts ***!
      \**********************************************************************/

    /*! exports provided: QuestionViewPageModule */

    /***/
    function srcAppPagesQuestionQuestionViewQuestionViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionViewPageModule", function () {
        return QuestionViewPageModule;
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


      var _question_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./question-view-routing.module */
      "./src/app/pages/question/question-view/question-view-routing.module.ts");
      /* harmony import */


      var _question_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./question-view.page */
      "./src/app/pages/question/question-view/question-view.page.ts");

      var QuestionViewPageModule = function QuestionViewPageModule() {
        _classCallCheck(this, QuestionViewPageModule);
      };

      QuestionViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _question_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionViewPageRoutingModule"]],
        declarations: [_question_view_page__WEBPACK_IMPORTED_MODULE_6__["QuestionViewPage"]]
      })], QuestionViewPageModule);
      /***/
    },

    /***/
    "./src/app/pages/question/question-view/question-view.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/question/question-view/question-view.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesQuestionQuestionViewQuestionViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-card {\n  --background: #f5f5f5;\n}\n\nion-card-title {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-card-content {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n\n.date {\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24tdmlldy9xdWVzdGlvbi12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLXZpZXcvcXVlc3Rpb24tdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/question/question-view/question-view.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/question/question-view/question-view.page.ts ***!
      \********************************************************************/

    /*! exports provided: QuestionViewPage */

    /***/
    function srcAppPagesQuestionQuestionViewQuestionViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionViewPage", function () {
        return QuestionViewPage;
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


      var src_app_models_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/question */
      "./src/app/models/question.ts");
      /* harmony import */


      var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/question.service */
      "./src/app/services/question.service.ts");
      /* harmony import */


      var src_app_models_reply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/reply */
      "./src/app/models/reply.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");
      /* harmony import */


      var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tag.service */
      "./src/app/services/tag.service.ts");
      /* harmony import */


      var src_app_models_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/tag */
      "./src/app/models/tag.ts");

      var QuestionViewPage = /*#__PURE__*/function () {
        function QuestionViewPage(activatedRoute, questionService, tagService, router, alertController, toastController) {
          _classCallCheck(this, QuestionViewPage);

          this.activatedRoute = activatedRoute;
          this.questionService = questionService;
          this.tagService = tagService;
          this.router = router;
          this.alertController = alertController;
          this.toastController = toastController;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
          this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_3__["Question"]();
          this.tag = new src_app_models_tag__WEBPACK_IMPORTED_MODULE_10__["Tag"]();
          this.reply = new src_app_models_reply__WEBPACK_IMPORTED_MODULE_5__["Reply"]();
        }

        _createClass(QuestionViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.questionId = this.activatedRoute.snapshot.params.id;
            this.getQuestion(this.questionId);
            this.getTag(this.questionId);
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_8__["Util"].getStorageUser();
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

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeQuestion",
          value: function closeQuestion(id) {
            var _this2 = this;

            this.questionService.closeQuestion(id).subscribe(function (res) {
              if (res.status) {
                _this2.question.open = false;
              } else {
                _this2.navigateAlert('¡ERROR AL CERRAR!', 'Hubo un problema al intentar obtener la informacion de esta pregunta', 'OK', 'questions');
              }
            }, function (err) {
              _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'questions');
            });
          }
        }, {
          key: "getQuestion",
          value: function getQuestion(id) {
            var _this3 = this;

            this.questionService.getQuestionById(id).subscribe(function (res) {
              if (res.status) {
                _this3.question = res.data;
              } else {
                _this3.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de esta pregunta', 'OK', 'questions');
              }
            }, function (err) {
              _this3.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'questions');
            });
          }
        }, {
          key: "getTag",
          value: function getTag(id) {
            var _this4 = this;

            this.tagService.getTagByQuestionId(id).subscribe(function (res) {
              if (res.status) {
                _this4.tag = res.data;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "addReply",
          value: function addReply() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.reply.user._id = this.user._id;
                      this.reply.date = new Date();
                      this.reply.score = 0;
                      this.questionService.addReply(this.questionId, this.reply).subscribe(function (res) {
                        if (res.status) {
                          _this5.question = res.data;
                          _this5.reply = new src_app_models_reply__WEBPACK_IMPORTED_MODULE_5__["Reply"]();
                        } else {
                          _this5.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar agregar esta pregunta', 'OK', 'questions');
                        }
                      }, function (err) {
                        _this5.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'questions');
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "removeReply",
          value: function removeReply(replyId) {
            var _this6 = this;

            this.questionService.removeReply(this.questionId, replyId).subscribe(function (res) {
              if (res.status) {
                var ind = _this6.question.replys.findIndex(function (reply) {
                  return reply._id === res.data;
                });

                _this6.question.replys.splice(ind, 1);
              } else {
                _this6.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar remover esta respuesta', 'OK', 'questions');
              }
            }, function (err) {
              _this6.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'questions');
            });
          }
        }, {
          key: "confirmRemoveReply",
          value: function confirmRemoveReply(replyId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Estas seguro que deseas eliminar esta respuesta?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this7.removeReply(replyId);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "confirmAddReply",
          value: function confirmAddReply() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this8 = this;

              var alert, toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.reply.reply = this.reply.reply.trim();

                      if (!this.reply.reply.trim()) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Esta seguro de enviar esta respuesta?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this8.addReply();
                          }
                        }]
                      });

                    case 4:
                      alert = _context4.sent;
                      _context4.next = 7;
                      return alert.present();

                    case 7:
                      _context4.next = 14;
                      break;

                    case 9:
                      _context4.next = 11;
                      return this.toastController.create({
                        message: 'No puedes enviar una respuesta vacia.',
                        duration: 1500
                      });

                    case 11:
                      toast = _context4.sent;
                      toast.present();
                      this.reply.reply = '';

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return QuestionViewPage;
      }();

      QuestionViewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]
        }, {
          type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_9__["TagService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      QuestionViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./question-view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-view/question-view.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./question-view.page.scss */
        "./src/app/pages/question/question-view/question-view.page.scss"))["default"]]
      })], QuestionViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-question-question-view-question-view-module-es5.js.map