(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tag-tag-form-tag-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Agregar etiquetas\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-text color=\"medium\">\r\n      <div class=\"ion-text-center\">\r\n        Por favor marca la(s) categoria(s) a la que pertenece tu pregunta.\r\n      </div>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let check of checkList\">\r\n      <ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"check.isCheck\" (ionChange)=\"validateForm()\"></ion-checkbox>\r\n      <ion-label>{{check.name}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button expand=\"full\" color=\"myPrimary\" (click)=\"createTag()\" [disabled]=\"!formValid\">Enviar</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tag/tag-form/tag-form-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/tag/tag-form/tag-form-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TagFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFormPageRoutingModule", function() { return TagFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tag_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-form.page */ "./src/app/pages/tag/tag-form/tag-form.page.ts");




const routes = [
    {
        path: '',
        component: _tag_form_page__WEBPACK_IMPORTED_MODULE_3__["TagFormPage"]
    }
];
let TagFormPageRoutingModule = class TagFormPageRoutingModule {
};
TagFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TagFormPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tag/tag-form/tag-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tag/tag-form/tag-form.module.ts ***!
  \*******************************************************/
/*! exports provided: TagFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFormPageModule", function() { return TagFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tag_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-form-routing.module */ "./src/app/pages/tag/tag-form/tag-form-routing.module.ts");
/* harmony import */ var _tag_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-form.page */ "./src/app/pages/tag/tag-form/tag-form.page.ts");







let TagFormPageModule = class TagFormPageModule {
};
TagFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tag_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagFormPageRoutingModule"]
        ],
        declarations: [_tag_form_page__WEBPACK_IMPORTED_MODULE_6__["TagFormPage"]]
    })
], TagFormPageModule);



/***/ }),

/***/ "./src/app/pages/tag/tag-form/tag-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/tag/tag-form/tag-form.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFnL3RhZy1mb3JtL3RhZy1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWcvdGFnLWZvcm0vdGFnLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tag/tag-form/tag-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tag/tag-form/tag-form.page.ts ***!
  \*****************************************************/
/*! exports provided: TagFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFormPage", function() { return TagFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var src_app_models_branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/branch */ "./src/app/models/branch.ts");
/* harmony import */ var src_app_models_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/check */ "./src/app/models/check.ts");
/* harmony import */ var src_app_models_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/tag */ "./src/app/models/tag.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/nl.service */ "./src/app/services/nl.service.ts");











let TagFormPage = class TagFormPage {
    constructor(branchService, tagService, activatedRoute, alertController, router, questionService, nlService) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.questionId = this.activatedRoute.snapshot.params.id;
        this.labels = (this.activatedRoute.snapshot.queryParams.labels)
            ? this.activatedRoute.snapshot.queryParams.labels
            : [];
        this.getBranches();
        this.formValid = false;
        this.addWords = false;
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
    getBranches() {
        this.branchService.getBranches().subscribe((res) => {
            if (res.status) {
                this.branchList = res.data;
                this.fillList();
            }
            else {
                this.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'my-questions');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    fillList() {
        for (const branch of this.branchList) {
            const check = new src_app_models_check__WEBPACK_IMPORTED_MODULE_4__["Check"]();
            check.id = branch._id;
            check.name = branch.name;
            check.isCheck = false;
            this.checkList.push(check);
        }
        this.fillCheckList();
    }
    fillCheckList() {
        this.addWords = (this.labels.length > 0) ? false : true;
        let ind;
        for (let lbl of this.labels) {
            ind = this.checkList.findIndex(check => check.id === lbl);
            this.checkList[ind].isCheck = true;
        }
        this.validateForm();
    }
    createTag() {
        const tag = new src_app_models_tag__WEBPACK_IMPORTED_MODULE_5__["Tag"]();
        tag.question._id = this.questionId;
        for (const check of this.checkList) {
            if (check.isCheck) {
                const branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_3__["Branch"]();
                branch._id = check.id;
                tag.tags.push(branch);
            }
        }
        if (this.addWords) {
            this.addNewWords(this.checkList);
        }
        this.tagService.createTag(tag).subscribe((res) => {
            if (res.status) {
                this.navigateAlert('¡PREGUNTA ENVIADA!', 'Creaste una nueva pregunta', 'OK', 'my-questions');
            }
            else {
                this.navigateAlert('¡ERROR AL AGREGAR LOS TAGS!', 'Hubo un problema al intentar crear este tag', 'OK', 'my-questions');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    addNewWords(tags) {
        const brchs = new Array();
        for (const check of this.checkList) {
            const exists = this.labels.findIndex(br => br === check.id);
            if (check.isCheck && exists === -1) {
                brchs.push(check.name);
            }
        }
        this.questionService.getQuestionById(this.questionId).subscribe((res) => {
            if (res.status) {
                const words = res.data.title;
                this.nlService.addNewWords(words, brchs).subscribe((res) => { }, (err) => {
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    validateForm() {
        for (const check of this.checkList) {
            const exists = this.labels.findIndex(br => br === check.id);
            if (check.isCheck && exists === -1) {
                this.addWords = true;
                break;
            }
            this.addWords = false;
        }
        for (const check of this.checkList) {
            if (check.isCheck) {
                this.formValid = true;
                return;
            }
        }
        this.formValid = false;
        this.addWords = false;
    }
};
TagFormPage.ctorParameters = () => [
    { type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
    { type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_9__["QuestionService"] },
    { type: src_app_services_nl_service__WEBPACK_IMPORTED_MODULE_10__["NlService"] }
];
TagFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tag-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tag/tag-form/tag-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tag-form.page.scss */ "./src/app/pages/tag/tag-form/tag-form.page.scss")).default]
    })
], TagFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-tag-tag-form-tag-form-module-es2015.js.map