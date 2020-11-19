(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-questions-questions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/questions/questions.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/questions/questions.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Preguntas\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item class=\"leyenda\">\r\n    <p (click)=\"showHide()\">\r\n      <ion-text color=\"medium\"> ¿Qué es esto?</ion-text>\r\n    </p>\r\n    <ion-item slot=\"end\" color=\"light\" style=\"margin: 0px;\">\r\n      <ion-label color=\"primary\" style=\"margin-right: 10px;\">Buscar: </ion-label>\r\n      <ion-input class=\"findInput\" (keyup)=\"findQuestion($event.target.value)\"></ion-input>\r\n    </ion-item>\r\n  </ion-item>\r\n  <div id=\"showHide\" style=\"display: none;\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        En esta sección podrás ver todas las preguntas que se han realizado\r\n        en todo el foro. Las preguntas aquí abarcan los temas en general.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-list>\r\n\r\n    <ion-text *ngIf=\"questionFilterList.length < 1\" color=\"medium\">\r\n      <div style=\"font-size: 24px\" class=\"ion-text-center\">\r\n        No hay preguntas disponibles.\r\n      </div>\r\n    </ion-text>\r\n\r\n      <ion-item *ngFor=\"let question of questionFilterList\" (click)=\"viewQuestion(question._id)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/icon/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-text slot=\"end\" color=\"myPrimary\"> {{question.date | date: 'd/M/yyyy'}} </ion-text>\r\n        <ion-label>\r\n          <ion-text color=\"primary\">\r\n            <h2 class=\"user\">{{ question.user.name + ' ' + question.user.lastName }}</h2>\r\n          </ion-text>\r\n          <h2>\r\n            <ion-text class=\"title\"> <strong> {{ question.title }} </strong></ion-text>\r\n          </h2>\r\n          <ion-text color=\"medium\">\r\n            <span> {{ question.body }} </span>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/question/questions/questions-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/question/questions/questions-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageRoutingModule", function() { return QuestionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.page */ "./src/app/pages/question/questions/questions.page.ts");




const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_3__["QuestionsPage"]
    }
];
let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {
};
QuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/question/questions/questions.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/question/questions/questions.module.ts ***!
  \**************************************************************/
/*! exports provided: QuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/pages/question/questions/questions-routing.module.ts");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions.page */ "./src/app/pages/question/questions/questions.page.ts");







let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionsPageRoutingModule"]
        ],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]]
    })
], QuestionsPageModule);



/***/ }),

/***/ "./src/app/pages/question/questions/questions.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/question/questions/questions.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select:hover {\n  cursor: pointer;\n}\n\nion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-card-content {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n\n.leyenda {\n  --background: #f5f5f5;\n}\n\n.user {\n  color: #3880ff;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.title {\n  color: #607D8B;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.findInput {\n  color: #107aac;\n  background-color: #fbfbfb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb25zL3F1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9ucy9xdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubGV5ZW5kYSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmluZElucHV0IHtcclxuICAgIGNvbG9yOiByZ2IoMTYsIDEyMiwgMTcyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjUxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/question/questions/questions.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/question/questions/questions.page.ts ***!
  \************************************************************/
/*! exports provided: QuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let QuestionsPage = class QuestionsPage {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.questionList = new Array();
        this.questionFilterList = new Array();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getQuestions();
    }
    getQuestions() {
        this.questionService.getQuestions().subscribe((res) => {
            if (res.status) {
                this.questionList = res.data;
                this.questionFilterList = this.questionList;
            }
        }, (err) => {
            console.log(err);
        });
    }
    findQuestion(quest) {
        quest = quest.trim();
        const regExp = new RegExp(quest, 'i');
        this.questionFilterList = [];
        for (const qtn of this.questionList) {
            if (qtn.title.match(regExp)) {
                this.questionFilterList.push(qtn);
            }
        }
    }
    viewQuestion(id) {
        this.router.navigate(['/question-view/' + id]);
    }
    showHide() {
        if (document.getElementById('showHide').style.display === 'none') {
            document.getElementById('showHide').style.display = 'block';
        }
        else if (document.getElementById('showHide').style.display === 'block') {
            document.getElementById('showHide').style.display = 'none';
        }
    }
};
QuestionsPage.ctorParameters = () => [
    { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./questions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/questions/questions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./questions.page.scss */ "./src/app/pages/question/questions/questions.page.scss")).default]
    })
], QuestionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-question-questions-questions-module-es2015.js.map