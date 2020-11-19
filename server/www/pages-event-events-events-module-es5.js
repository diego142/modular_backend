(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-events-events-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/events/events.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/events/events.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEventEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Eventos</ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item class=\"leyenda\">\r\n    <p (click)=\"mostrarOcultar()\">\r\n      <ion-text color=\"medium\"> ¿Qué es esto?</ion-text>\r\n    </p>\r\n  </ion-item>\r\n  <div id=\"mostrarOcultar\" style=\"display: none;\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        La sección de eventos te permite ver los eventos próximos en la comunidad de Cucei así como\r\n        poder crear un evento propio para invitar a quien lo vea a participar en el.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-list>\r\n\r\n    <ion-text *ngIf=\"eventService.eventList.length < 1\" color=\"medium\">\r\n      <div style=\"font-size: 24px\" class=\"ion-text-center\">\r\n        No hay eventos disponibles.\r\n      </div>\r\n    </ion-text>\r\n\r\n    <ion-card *ngFor=\"let event of eventService.eventList\">\r\n      <ion-item color=\"headerColor\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/icon/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3 class=\"user\">\r\n            <ion-text color=\"myPrimaryText\">\r\n              {{event.user.name + ' ' + event.user.lastName}}\r\n            </ion-text>\r\n          </h3>\r\n          <p class=\"date\">\r\n            <ion-text color=\"myPrimaryText\">\r\n              {{event.dateStart | date: 'MMM d, y': 'UTC'}}\r\n            </ion-text>\r\n          </p>\r\n        </ion-label>\r\n        <ion-label color=\"light\"slot=end>\r\n          <strong> Fin: </strong> \r\n          <ion-text>\r\n            {{event.dateEnd | date: 'MMM d, y': 'UTC'}}\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-card-header>\r\n        <ion-card-title>{{ event.title }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{event.body}}\r\n      </ion-card-content>\r\n\r\n      <ion-footer *ngIf=\"(event.user._id == user._id) || (user.permission == 1)\">\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-button color=\"myPrimary\" (click)=\"editEvent(event._id)\">\r\n              <ion-label>\r\n                EDITAR\r\n              </ion-label>\r\n              <ion-icon slot=\"end\" class=\"iconEdit\" name=\"create\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-button class=\"btnCerrar\" color=\"danger\" (click)=\"confirmClose(event._id)\"> CERRAR\r\n              <ion-icon name=\"close-circle\" class=\"iconClose\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-footer>\r\n    </ion-card>\r\n\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button size=\"small\" color=\"success\" routerLink=\"/event-form/0\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/event/events/events-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event/events/events-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventsPageRoutingModule */

    /***/
    function srcAppPagesEventEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
        return EventsPageRoutingModule;
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


      var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events.page */
      "./src/app/pages/event/events/events.page.ts");

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
      }];

      var EventsPageRoutingModule = function EventsPageRoutingModule() {
        _classCallCheck(this, EventsPageRoutingModule);
      };

      EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/event/events/events.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/event/events/events.module.ts ***!
      \*****************************************************/

    /*! exports provided: EventsPageModule */

    /***/
    function srcAppPagesEventEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
        return EventsPageModule;
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


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./events-routing.module */
      "./src/app/pages/event/events/events-routing.module.ts");
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./events.page */
      "./src/app/pages/event/events/events.page.ts");

      var EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
      })], EventsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/event/events/events.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/event/events/events.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEventEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #607D8B;\n  --color: white;\n}\n\n.leyenda {\n  --background: #f5f5f5;\n}\n\nion-card {\n  --background: #fafafa;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n}\n\nion-card-title {\n  --color: #607D8B;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-card-content {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n\n.iconEdit {\n  padding-left: 4px;\n  padding-bottom: 2px;\n}\n\n.iconClose {\n  padding-left: 4px;\n  padding-bottom: 2px;\n}\n\n.btnEdit {\n  height: 35px;\n  width: 110px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\n\n.btnClose {\n  height: 35px;\n  width: 105px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\n\n.user {\n  color: #3880ff;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.date {\n  color: black;\n  font-size: 15px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYwN0Q4QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGV5ZW5kYSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIC0tY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmljb25FZGl0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmljb25DbG9zZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5idG5FZGl0IHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuQ2xvc2Uge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/event/events/events.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/event/events/events.page.ts ***!
      \***************************************************/

    /*! exports provided: EventsPage */

    /***/
    function srcAppPagesEventEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
        return EventsPage;
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


      var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/event.service */
      "./src/app/services/event.service.ts");
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

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(eventService, router, alertController, toastController) {
          _classCallCheck(this, EventsPage);

          this.eventService = eventService;
          this.router = router;
          this.alertController = alertController;
          this.toastController = toastController;
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getStorageUser();
            this.getEvents();
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
          key: "confirmClose",
          value: function confirmClose(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡CONFIRMAR!',
                        message: '¿Esta seguro que desea cerrar este evento?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Si',
                          cssClass: 'success',
                          handler: function handler() {
                            _this.closeEvent(id);
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
          key: "getEvents",
          value: function getEvents() {
            var _this2 = this;

            this.eventService.getEvents().subscribe(function (res) {
              _this2.eventService.eventList = res.data;
            }, function (err) {
              _this2.toast('Problema al conectar la servidor.');
            });
          }
        }, {
          key: "editEvent",
          value: function editEvent(id) {
            this.router.navigate(['/event-form/' + id]);
          }
        }, {
          key: "closeEvent",
          value: function closeEvent(id) {
            var _this3 = this;

            this.eventService.closeEvent(id).subscribe(function (res) {
              var ind = _this3.eventService.eventList.findIndex(function (event) {
                return event._id === id;
              });

              _this3.eventService.eventList.splice(ind, 1);

              _this3.toast('El evento se ha cerrado.');
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.toast('No se pudo cerrar el evento, revise su conexión.');

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "mostrarOcultar",
          value: function mostrarOcultar() {
            if (document.getElementById('mostrarOcultar').style.display === 'none') {
              document.getElementById('mostrarOcultar').style.display = 'block';
            } else if (document.getElementById('mostrarOcultar').style.display === 'block') {
              document.getElementById('mostrarOcultar').style.display = 'none';
            }
          }
        }]);

        return EventsPage;
      }();

      EventsPage.ctorParameters = function () {
        return [{
          type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./events.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/events/events.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./events.page.scss */
        "./src/app/pages/event/events/events.page.scss"))["default"]]
      })], EventsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-event-events-events-module-es5.js.map