(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-event-form-event-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEventEventFormEventFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"headerColor\">\r\n    <ion-title>\r\n      <div class=\"ion-text-center\">Nuevo Evento </div>\r\n      <!-- <ion-icon name=\"newspaper\"></ion-icon> -->\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item class=\"mensaje\">\r\n    <div class=\"ion-text-center\" style=\"font-size: 24px;\">\r\n      <ion-text color=\"myPrimaryText\">\r\n        <h2>\r\n          Recuerda que todos los usuarios de la aplicacion podran ver lo eventos que publiques\r\n        </h2>\r\n      </ion-text>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <form #formEvent=\"ngForm\">\r\n    <ion-list>\r\n\r\n      <ion-item *ngIf=\"event.dateStart; else elseDate\">\r\n        <ion-label>Fecha de inicio:</ion-label>\r\n        <ion-datetime  [(ngModel)]=\"event.dateStart\" name=\"dateStart\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ng-template #elseDate>\r\n        <ion-item>\r\n          <ion-label>Fecha de inicio:</ion-label>\r\n          <ion-datetime  [value]=\"today\" name=\"dateStart\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n        </ion-item>\r\n      </ng-template>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\">Fecha de finalización:</ion-label>\r\n        <ion-datetime [(ngModel)]=\"event.dateEnd\" name=\"dateEnd\" displayFormat=\"MMMM DD, YYYY\" [max]=\"maxD\" [min]=\"today\" display-timezone=\"utc\" required></ion-datetime>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Titulo del evento:</ion-label>\r\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"event.title\" minlength=\"10\" required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"medium\">Información:</ion-label>\r\n      <ion-textarea name=\"body\" [(ngModel)]=\"event.body\" minlength=\"10\" required></ion-textarea>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n</form>\r\n\r\n  <section>\r\n    <ion-button *ngIf=\"id == '0'; else elseOpt\" expand=\"full\"  \r\n    [disabled]=\"!formEvent.valid\" (click)=\"createEvent()\" color=\"myPrimaryDark\">\r\n      PUBLICAR \r\n    </ion-button>\r\n    <ng-template #elseOpt>\r\n      <ion-button expand=\"full\" (click)=\"updateEvent()\" color=\"myPrimaryDark\"> ACTUALIZAR </ion-button>\r\n    </ng-template>\r\n  </section>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/models/event.ts":
    /*!*********************************!*\
      !*** ./src/app/models/event.ts ***!
      \*********************************/

    /*! exports provided: Event */

    /***/
    function srcAppModelsEventTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Event", function () {
        return Event;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/models/user.ts");

      var Event = function Event() {
        _classCallCheck(this, Event);

        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
      };
      /***/

    },

    /***/
    "./src/app/pages/event/event-form/event-form-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EventFormPageRoutingModule */

    /***/
    function srcAppPagesEventEventFormEventFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPageRoutingModule", function () {
        return EventFormPageRoutingModule;
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


      var _event_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");

      var routes = [{
        path: '',
        component: _event_form_page__WEBPACK_IMPORTED_MODULE_3__["EventFormPage"]
      }];

      var EventFormPageRoutingModule = function EventFormPageRoutingModule() {
        _classCallCheck(this, EventFormPageRoutingModule);
      };

      EventFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventFormPageModule */

    /***/
    function srcAppPagesEventEventFormEventFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPageModule", function () {
        return EventFormPageModule;
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


      var _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event-form-routing.module */
      "./src/app/pages/event/event-form/event-form-routing.module.ts");
      /* harmony import */


      var _event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");

      var EventFormPageModule = function EventFormPageModule() {
        _classCallCheck(this, EventFormPageModule);
      };

      EventFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventFormPageRoutingModule"]],
        declarations: [_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"]]
      })], EventFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEventEventFormEventFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-text {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.mensaje {\n  --background: #607D8B;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-button {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQvZXZlbnQtZm9ybS9ldmVudC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWVuc2FqZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2MDdEOEI7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: EventFormPage */

    /***/
    function srcAppPagesEventEventFormEventFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPage", function () {
        return EventFormPage;
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


      var src_app_models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/event */
      "./src/app/models/event.ts");
      /* harmony import */


      var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/event.service */
      "./src/app/services/event.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/util */
      "./src/app/models/util.ts");

      var EventFormPage = /*#__PURE__*/function () {
        function EventFormPage(activatedRoute, eventService, router, alertController, loadingController) {
          _classCallCheck(this, EventFormPage);

          this.activatedRoute = activatedRoute;
          this.eventService = eventService;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.today = new Date().toISOString();
          this.maxD = new Date(2100, 1, 1).toISOString();
          this.event = new src_app_models_event__WEBPACK_IMPORTED_MODULE_3__["Event"]();
        }

        _createClass(EventFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.event.dateStart = new Date();
            this.id = this.activatedRoute.snapshot.params.id;
            this.getEvent(this.id);
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
          key: "getEvent",
          value: function getEvent(id) {
            var _this2 = this;

            if (id !== '0') {
              this.eventService.getEventById(id).subscribe(function (res) {
                if (res.status) {
                  _this2.event = res.data;
                } else {
                  _this2.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de este evento', 'OK', 'events');
                }
              }, function (err) {
                _this2.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
              });
            } else {
              this.event = new src_app_models_event__WEBPACK_IMPORTED_MODULE_3__["Event"]();
            }
          }
        }, {
          key: "createEvent",
          value: function createEvent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: 'Porfavor espere...'
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      this.event.dateStart = new Date();
                      this.event.user._id = src_app_models_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getStorageUser()._id;
                      this.event.open = true;
                      this.eventService.createEvent(this.event).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!res.status) {
                                    _context2.next = 6;
                                    break;
                                  }

                                  this.navigateAlert('¡EVENTO CREADO!', 'Creaste un nuevo evento', 'OK', 'events');
                                  _context2.next = 4;
                                  return loading.dismiss();

                                case 4:
                                  _context2.next = 9;
                                  break;

                                case 6:
                                  this.navigateAlert('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear el evento', 'OK', 'events');
                                  _context2.next = 9;
                                  return loading.dismiss();

                                case 9:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
                                  _context3.next = 3;
                                  return loading.dismiss();

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "updateEvent",
          value: function updateEvent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingController.create({
                        message: 'Porfavor espere...'
                      });

                    case 2:
                      loading = _context7.sent;
                      _context7.next = 5;
                      return loading.present();

                    case 5:
                      this.eventService.updateEvent(this.event).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  if (!res.status) {
                                    _context5.next = 6;
                                    break;
                                  }

                                  this.navigateAlert('¡EVENTO MODIFICADO!', 'Modificaste este evento', 'OK', 'events');
                                  _context5.next = 4;
                                  return loading.dismiss();

                                case 4:
                                  _context5.next = 9;
                                  break;

                                case 6:
                                  this.navigateAlert('¡ERROR AL MODIFICAR!', 'Hubo un problema al modificar este evento', 'OK', 'events');
                                  _context5.next = 9;
                                  return loading.dismiss();

                                case 9:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
                                  _context6.next = 3;
                                  return loading.dismiss();

                                case 3:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return EventFormPage;
      }();

      EventFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./event-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./event-form.page.scss */
        "./src/app/pages/event/event-form/event-form.page.scss"))["default"]]
      })], EventFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-event-event-form-event-form-module-es5.js.map