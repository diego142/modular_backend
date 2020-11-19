(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-question-form-question-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nueva pregunta\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #formQuestion=\"ngForm\">\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        <ion-label>Fecha:</ion-label>\r\n        <ion-datetime [value]=\"today\" displayFormat=\"MMMM DD, YYYY\" display-timezone=\"utc\" readonly></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Tu pregunta:</ion-label>\r\n        <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"question.title\" minlength=\"10\" required\r\n          (keyup)=\"getClassifications($event.key)\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">Agrega mas detalles sobre la pregunta:</ion-label>\r\n        <ion-textarea name=\"body\" [(ngModel)]=\"question.body\" minlength=\"8\" required (ionFocus)=\"getClassifications('?')\"></ion-textarea>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </form>\r\n\r\n  <section>\r\n    <ion-button *ngIf=\"this.questionId == '0'; else elseBtn\" expand=\"full\" color=\"myPrimary\" (click)=\"createQuestion()\"\r\n      [disabled]=\"!formQuestion.valid\">\r\n      PREGUNTAR\r\n    </ion-button>\r\n\r\n    <ng-template #elseBtn>\r\n      <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"updateQuestion()\" [disabled]=\"!formQuestion.valid\">\r\n        ACTUALIZAR\r\n      </ion-button>\r\n    </ng-template>\r\n  </section>\r\n\r\n  <div *ngIf=\"show\">\r\n    <ion-list>\r\n      <ion-text class=\"ion-margin-start\">Tu pregunta es de tipo:</ion-text>\r\n      <ion-item *ngFor=\"let label of labels\">\r\n        <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"getQuestions(label.ref)\">{{ label.name }}</ion-button>\r\n        <ion-text color=\"medium\" slot=\"end\">Mostrar sugerencias.</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list>\r\n\r\n      <ion-item *ngFor=\"let qtn of questionList\" (click)=\"viewQuestion(qtn._id)\">\r\n        <ion-text slot=\"end\" color=\"myPrimaryDark\"> {{qtn.date | date: 'd/M/yyyy'}} </ion-text>\r\n        <ion-label>\r\n          <h2><strong> {{ qtn.title }} </strong></h2>\r\n          <ion-text color=\"myPrimaryTextColor\">\r\n            <span> {{ qtn.body }} </span>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/question/question-form/question-form-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/question/question-form/question-form-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormPageRoutingModule", function() { return QuestionFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _question_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-form.page */ "./src/app/pages/question/question-form/question-form.page.ts");




const routes = [
    {
        path: '',
        component: _question_form_page__WEBPACK_IMPORTED_MODULE_3__["QuestionFormPage"]
    }
];
let QuestionFormPageRoutingModule = class QuestionFormPageRoutingModule {
};
QuestionFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionFormPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/question/question-form/question-form.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/question/question-form/question-form.module.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormPageModule", function() { return QuestionFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _question_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-form-routing.module */ "./src/app/pages/question/question-form/question-form-routing.module.ts");
/* harmony import */ var _question_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-form.page */ "./src/app/pages/question/question-form/question-form.page.ts");







let QuestionFormPageModule = class QuestionFormPageModule {
};
QuestionFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _question_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionFormPageRoutingModule"]
        ],
        declarations: [_question_form_page__WEBPACK_IMPORTED_MODULE_6__["QuestionFormPage"]]
    })
], QuestionFormPageModule);



/***/ }),

/***/ "./src/app/pages/question/question-form/question-form.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/question/question-form/question-form.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-button {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24tZm9ybS9xdWVzdGlvbi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/question/question-form/question-form.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/question/question-form/question-form.page.ts ***!
  \********************************************************************/
/*! exports provided: QuestionFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormPage", function() { return QuestionFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/question */ "./src/app/models/question.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/nl.service */ "./src/app/services/nl.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/util */ "./src/app/models/util.ts");









let QuestionFormPage = class QuestionFormPage {
    constructor(activatedRoute, questionService, router, alertController, nlService) {
        this.activatedRoute = activatedRoute;
        this.questionService = questionService;
        this.router = router;
        this.alertController = alertController;
        this.nlService = nlService;
        this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.today = new Date().toISOString();
    }
    ngOnInit() {
        this.characters = [' ', '.', '?'];
    }
    ionViewWillEnter() {
        this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.questionId = this.activatedRoute.snapshot.params.id;
        this.user = src_app_models_util__WEBPACK_IMPORTED_MODULE_8__["Util"].getStorageUser();
        this.getQuestion(this.questionId);
        this.show = false;
        this.questionList = Array();
        this.labels = new Array();
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
    createQuestion() {
        this.question.user._id = this.user._id;
        this.question.date = new Date();
        this.question.open = true;
        this.questionService.createQuestion(this.question).subscribe((res) => {
            if (res.status) {
                this.router.navigate(['/tag-form/' + res.data._id], { queryParams: { labels: this.labels.map(l => l.ref) } });
            }
            else {
                this.navigateAlert('¡ERROR AL CREAR!', 'Hubo un problema al intentar crear esta pregunta', 'OK', 'my-questions');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    updateQuestion() {
        this.questionService.updateQuestion(this.question).subscribe((res) => {
            if (res.status) {
                this.navigateAlert('¡PREGUNTA ACTUALIZADA!', 'Actualizaste esta pregunta', 'OK', 'my-questions');
            }
            else {
                this.navigateAlert('¡ERROR AL ACTULIZAR!', 'Hubo un problema al intentar actualizar estra pregunta', 'OK', 'my-questions');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'events');
        });
    }
    getQuestion(id) {
        if (id !== '0') {
            this.questionService.getQuestionById(id).subscribe((res) => {
                if (res.status) {
                    this.question = res.data;
                }
                else {
                    this.navigateAlert('¡ERROR AL OBTENER!', 'Hubo un problema al intentar obtener la informacion de esta pregunta', 'OK', 'my-questions');
                }
            }, (err) => {
                this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
            });
        }
        else {
            this.question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        }
    }
    getClassifications(key) {
        const size = (this.question.title) ? this.question.title.length : 0;
        if (size < 10) {
            this.labels = [];
            this.show = false;
            this.questionList = new Array();
        }
        else {
            if (this.characters.find(c => key === c)) {
                this.nlService.getClassify(this.question).subscribe((res) => {
                    if (res.data.length) {
                        this.labels = res.data;
                        this.show = true;
                    }
                }, (err) => {
                    console.log(err);
                });
            }
        }
    }
    getQuestions(ref) {
        this.nlService.getQuestions(ref).subscribe((res) => {
            if (res.status) {
                this.questionList = new Array();
                for (let tag of res.data) {
                    this.questionList.push(tag.question);
                }
            }
        }, (err) => {
            console.log(err);
        });
    }
    viewQuestion(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Salir de la edición?',
                message: 'Si continuas se perdera el progreso de tu pregunta.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Continuar',
                        cssClass: 'success',
                        handler: () => {
                            this.router.navigate(['/question-view/' + id]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
QuestionFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_6__["NlService"] }
];
QuestionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./question-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question-form/question-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./question-form.page.scss */ "./src/app/pages/question/question-form/question-form.page.scss")).default]
    })
], QuestionFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-question-question-form-question-form-module-es2015.js.map