(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-help-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help/help.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help/help.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ayudar\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item color=\"light\">\r\n    <ion-text color=\"medium\" (click)=\"showMessage()\">\r\n      ¿Qué es esto?\r\n    </ion-text>\r\n    <ion-item slot=\"end\" color=\"light\" style=\"margin: 0px;\">\r\n      <ion-label color=\"primary\" style=\"margin-right: 10px;\">Buscar: </ion-label>\r\n      <ion-input class=\"findInput\" (keyup)=\"findQuestion($event.target.value)\"></ion-input>\r\n    </ion-item>\r\n  </ion-item>\r\n\r\n  <div *ngIf=\"showMsg\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        Apoya a la comunidad de alumnos contestando las preguntas de los demas,\r\n        asi nos apoyamos entre todos. Usa el filtro para buscar preguntas que se ajusten\r\n        a tus conocimientos, o bien usa el buscador.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label>\r\n      <ion-text color=\"primary\" style=\"font-size: 18px\">Filtro:</ion-text>\r\n    </ion-label>\r\n\r\n    <ion-select interface=\"popover\" (ionChange)=\"filter()\" [(ngModel)]=\"selectText\" [selectedText]=\"selectText\">\r\n      <ion-select-option value=\"MIS HABILIDADES\">MIS HABILIDADES</ion-select-option>\r\n      <ion-select-option *ngFor=\"let branch of branchList\" [value]=\"branch.name\">{{ branch.name }}</ion-select-option>\r\n      <ion-select-option value=\"TODO\">TODO</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\" *ngIf=\"tagsFilterList.length < 1; else elseList\">\r\n    <ion-text color=\"medium\">\r\n      <div> No hay preguntas abiertas sobre este tema. </div>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ng-template #elseList>\r\n    \r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"getReloadTags($event)\">\r\n      <ion-refresher-content>\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n    \r\n    <ion-list>\r\n      <ion-item *ngFor=\"let tag of tagsFilterList\" (click)=\"viewQuestion(tag.question._id)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/icon/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-text slot=\"end\" color=\"myPrimary\"> {{tag.question.date |date: 'd/M/yyyy'}} </ion-text>\r\n        <ion-label>\r\n          <ion-text color=\"primary\">\r\n            <h2 class=\"user\"> {{tag.question.user.name + ' ' + tag.question.user.lastName}} </h2>\r\n          </ion-text>\r\n          <h2 class=\"title\"><strong> {{tag.question.title}} </strong></h2>\r\n          <ion-text color=\"medium\">\r\n            <span> {{tag.question.body}} </span>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ng-template>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/help/help/help-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/help/help/help-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help/help.page.ts");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/help/help/help.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/help/help/help.module.ts ***!
  \************************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "./src/app/pages/help/help/help-routing.module.ts");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help/help.page.ts");







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "./src/app/pages/help/help/help.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/help/help/help.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-toolbar {\n  --background: #00796B;\n  --color: white;\n}\n\n.user {\n  color: #3880ff;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.title {\n  color: #607D8B;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.findInput {\n  color: #107aac;\n  background-color: #fbfbfb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscC9oZWxwL2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNzk2QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcbi51c2VyIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmluZElucHV0IHtcclxuICAgIGNvbG9yOiByZ2IoMTYsIDEyMiwgMTcyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjUxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/help/help/help.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/help/help/help.page.ts ***!
  \**********************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/util */ "./src/app/models/util.ts");






let HelpPage = class HelpPage {
    constructor(branchService, tagService, router) {
        this.branchService = branchService;
        this.tagService = tagService;
        this.router = router;
        this.branchList = new Array();
        this.tagsList = new Array();
        this.tagsFilterList = new Array();
        this.showMsg = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.selectText = 'Elige una opcion';
        this.userId = src_app_models_util__WEBPACK_IMPORTED_MODULE_5__["Util"].getStorageUser()._id;
        this.getBranches();
        this.getTags();
    }
    getBranches() {
        this.branchService.getBranches().subscribe((res) => {
            if (res.status) {
                this.branchList = res.data;
            }
        }, (err) => {
            console.log(err);
        });
    }
    getReloadTags(event) {
        this.tagService.getTags().subscribe((res) => {
            if (res.status) {
                this.tagsList = res.data.filter(tag => tag.question.open === true);
                this.tagsFilterList = this.tagsList;
            }
            event.target.complete();
        }, (err) => {
            console.log(err);
            event.target.complete();
        });
    }
    getTags() {
        this.tagService.getTags().subscribe((res) => {
            if (res.status) {
                this.tagsList = res.data.filter(tag => tag.question.open === true);
                this.tagsFilterList = this.tagsList;
            }
        }, (err) => {
            console.log(err);
        });
    }
    filter() {
        if (this.selectText === 'TODO') {
            this.tagsFilterList = this.tagsList;
        }
        else if (this.selectText === 'MIS HABILIDADES') {
            const skill = src_app_models_util__WEBPACK_IMPORTED_MODULE_5__["Util"].getStorageSkills();
            this.tagsFilterList = this.tagsList.filter(tag => {
                if (tag.question.user._id !== this.userId) {
                    for (const branch of tag.tags) {
                        const exist = skill.skills.findIndex(sk => sk._id === branch._id);
                        if (exist !== -1) {
                            return tag;
                        }
                    }
                }
            });
        }
        else {
            this.tagsFilterList = this.tagsList.filter(tag => {
                for (const branch of tag.tags) {
                    if (branch.name === this.selectText) {
                        return tag;
                    }
                }
            });
        }
    }
    viewQuestion(id) {
        this.router.navigate(['/question-view/' + id]);
    }
    showMessage() {
        this.showMsg = !this.showMsg;
    }
    findQuestion(quest) {
        quest = quest.trim();
        const regExp = new RegExp(quest, 'i');
        this.tagsFilterList = [];
        for (const tag of this.tagsList) {
            if (tag.question.title.match(regExp)) {
                this.tagsFilterList.push(tag);
            }
        }
    }
};
HelpPage.ctorParameters = () => [
    { type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
    { type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help/help.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/help/help/help.page.scss")).default]
    })
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=pages-help-help-help-module-es2015.js.map