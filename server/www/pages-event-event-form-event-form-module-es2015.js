(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-event-form-event-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"headerColor\">\r\n    <ion-title>\r\n      <div class=\"ion-text-center\">Nuevo Evento </div>\r\n      <!-- <ion-icon name=\"newspaper\"></ion-icon> -->\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item class=\"mensaje\">\r\n    <div class=\"ion-text-center\" style=\"font-size: 24px;\">\r\n      <ion-text color=\"myPrimaryText\">\r\n        <h2>\r\n          Recuerda que todos los usuarios de la aplicacion podran ver lo eventos que publiques\r\n        </h2>\r\n      </ion-text>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <form #formEvent=\"ngForm\">\r\n    <ion-list>\r\n\r\n      <ion-item *ngIf=\"event.dateStart; else elseDate\">\r\n        <ion-label>Fecha de inicio:</ion-label>\r\n        <ion-datetime  [(ngModel)]=\"event.dateStart\" name=\"dateStart\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ng-template #elseDate>\r\n        <ion-item>\r\n          <ion-label>Fecha de inicio:</ion-label>\r\n          <ion-datetime  [value]=\"today\" name=\"dateStart\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n        </ion-item>\r\n      </ng-template>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"tertiary\">Fecha de finalización:</ion-label>\r\n        <ion-datetime [(ngModel)]=\"event.dateEnd\" name=\"dateEnd\" displayFormat=\"MMMM DD, YYYY\" [max]=\"maxD\" [min]=\"today\" display-timezone=\"utc\" required></ion-datetime>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Titulo del evento:</ion-label>\r\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"event.title\" minlength=\"10\" required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"medium\">Información:</ion-label>\r\n      <ion-textarea name=\"body\" [(ngModel)]=\"event.body\" minlength=\"10\" required></ion-textarea>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n</form>\r\n\r\n  <section>\r\n    <ion-button *ngIf=\"id == '0'; else elseOpt\" expand=\"full\"  \r\n    [disabled]=\"!formEvent.valid\" (click)=\"createEvent()\" color=\"myPrimaryDark\">\r\n      PUBLICAR \r\n    </ion-button>\r\n    <ng-template #elseOpt>\r\n      <ion-button expand=\"full\" (click)=\"updateEvent()\" color=\"myPrimaryDark\"> ACTUALIZAR </ion-button>\r\n    </ng-template>\r\n  </section>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/models/event.ts":
/*!*********************************!*\
  !*** ./src/app/models/event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");

class Event {
    constructor() {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
}


/***/ }),

/***/ "./src/app/pages/event/event-form/event-form-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EventFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPageRoutingModule", function() { return EventFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _event_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-form.page */ "./src/app/pages/event/event-form/event-form.page.ts");




const routes = [
    {
        path: '',
        component: _event_form_page__WEBPACK_IMPORTED_MODULE_3__["EventFormPage"]
    }
];
let EventFormPageRoutingModule = class EventFormPageRoutingModule {
};
EventFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventFormPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.module.ts ***!
  \*************************************************************/
/*! exports provided: EventFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPageModule", function() { return EventFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-form-routing.module */ "./src/app/pages/event/event-form/event-form-routing.module.ts");
/* harmony import */ var _event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-form.page */ "./src/app/pages/event/event-form/event-form.page.ts");







let EventFormPageModule = class EventFormPageModule {
};
EventFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventFormPageRoutingModule"]
        ],
        declarations: [_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"]]
    })
], EventFormPageModule);



/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-text {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.mensaje {\n  --background: #607D8B;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-button {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQvZXZlbnQtZm9ybS9ldmVudC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3OTZCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWVuc2FqZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2MDdEOEI7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
  \***********************************************************/
/*! exports provided: EventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPage", function() { return EventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/event */ "./src/app/models/event.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/util */ "./src/app/models/util.ts");







let EventFormPage = class EventFormPage {
    constructor(activatedRoute, eventService, router, alertController, loadingController) {
        this.activatedRoute = activatedRoute;
        this.eventService = eventService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.today = new Date().toISOString();
        this.maxD = new Date(2100, 1, 1).toISOString();
        this.event = new src_app_models_event__WEBPACK_IMPORTED_MODULE_3__["Event"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.event.dateStart = new Date();
        this.id = this.activatedRoute.snapshot.params.id;
        this.getEvent(this.id);
    }
    navigateAlert(head, subHead, btnTex, navigate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: head,
                subHeader: subHead,
                buttons: [{
                        text: btnTex,
                        handler: () => {
                            this.router.navigate(['/' + navigate + '/']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    getEvent(id) {
        if (id !== '0') {
            this.eventService.getEventById(id).subscribe((res) => {
                if (res.status) {
                    this.event = res.data;
                }
                else {
                    this.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de este evento', 'OK', 'events');
                }
            }, (err) => {
                this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
            });
        }
        else {
            this.event = new src_app_models_event__WEBPACK_IMPORTED_MODULE_3__["Event"]();
        }
    }
    createEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            this.event.dateStart = new Date();
            this.event.user._id = src_app_models_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getStorageUser()._id;
            this.event.open = true;
            this.eventService.createEvent(this.event).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.status) {
                    this.navigateAlert('¡EVENTO CREADO!', 'Creaste un nuevo evento', 'OK', 'events');
                    yield loading.dismiss();
                }
                else {
                    this.navigateAlert('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear el evento', 'OK', 'events');
                    yield loading.dismiss();
                }
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
                yield loading.dismiss();
            }));
        });
    }
    updateEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            this.eventService.updateEvent(this.event).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.status) {
                    this.navigateAlert('¡EVENTO MODIFICADO!', 'Modificaste este evento', 'OK', 'events');
                    yield loading.dismiss();
                }
                else {
                    this.navigateAlert('¡ERROR AL MODIFICAR!', 'Hubo un problema al modificar este evento', 'OK', 'events');
                    yield loading.dismiss();
                }
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
                yield loading.dismiss();
            }));
        });
    }
};
EventFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-form.page.scss */ "./src/app/pages/event/event-form/event-form.page.scss")).default]
    })
], EventFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-event-event-form-event-form-module-es2015.js.map