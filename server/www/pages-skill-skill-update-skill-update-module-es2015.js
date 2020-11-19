(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skill-skill-update-skill-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-update/skill-update.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-update/skill-update.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"headerColor\">\r\n    <ion-title>Actualizar habilidades</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-text color=\"myPrimaryTextColor\" style=\"font-size: large;\">\r\n      <div class=\"ion-text-center\" style=\"padding-top: 5px;\">\r\n        Por favor marca la(s) habilidad(es) que posees. Con esto podras apoyar a la comunidad de alumnos.\r\n      </div>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let check of checkList\">\r\n      <ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"check.isCheck\" (ionChange)=\"validateForm()\">\r\n      </ion-checkbox>\r\n      <ion-label>{{ check.name }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" class=\"btnActualizar\" color=\"headerColor\" (click)=\"updateSkill()\" [disabled]=\"!formValid\">Actualizar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/skill/skill-update/skill-update-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/skill/skill-update/skill-update-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SkillUpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillUpdatePageRoutingModule", function() { return SkillUpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _skill_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-update.page */ "./src/app/pages/skill/skill-update/skill-update.page.ts");




const routes = [
    {
        path: '',
        component: _skill_update_page__WEBPACK_IMPORTED_MODULE_3__["SkillUpdatePage"]
    }
];
let SkillUpdatePageRoutingModule = class SkillUpdatePageRoutingModule {
};
SkillUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SkillUpdatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/skill/skill-update/skill-update.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skill/skill-update/skill-update.module.ts ***!
  \*****************************************************************/
/*! exports provided: SkillUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillUpdatePageModule", function() { return SkillUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _skill_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill-update-routing.module */ "./src/app/pages/skill/skill-update/skill-update-routing.module.ts");
/* harmony import */ var _skill_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill-update.page */ "./src/app/pages/skill/skill-update/skill-update.page.ts");







let SkillUpdatePageModule = class SkillUpdatePageModule {
};
SkillUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _skill_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkillUpdatePageRoutingModule"]
        ],
        declarations: [_skill_update_page__WEBPACK_IMPORTED_MODULE_6__["SkillUpdatePage"]]
    })
], SkillUpdatePageModule);



/***/ }),

/***/ "./src/app/pages/skill/skill-update/skill-update.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skill/skill-update/skill-update.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white;\n}\n\nion-title {\n  --color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-item {\n  --background: #f5f5f5;\n  --color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 17px;\n}\n\n.btnActualizar {\n  font-family: Arial, Helvetica, sans-serif;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGwvc2tpbGwtdXBkYXRlL3NraWxsLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2tpbGwvc2tpbGwtdXBkYXRlL3NraWxsLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmJ0bkFjdHVhbGl6YXIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/skill/skill-update/skill-update.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/skill/skill-update/skill-update.page.ts ***!
  \***************************************************************/
/*! exports provided: SkillUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillUpdatePage", function() { return SkillUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/branch */ "./src/app/models/branch.ts");
/* harmony import */ var src_app_models_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/check */ "./src/app/models/check.ts");
/* harmony import */ var src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/skills.service */ "./src/app/services/skills.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_skill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/skill */ "./src/app/models/skill.ts");
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/util */ "./src/app/models/util.ts");










let SkillUpdatePage = class SkillUpdatePage {
    constructor(branchService, skillService, activatedRoute, alertController, router) {
        this.branchService = branchService;
        this.skillService = skillService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.router = router;
        this.branchList = new Array();
        this.checkList = new Array();
        this.userSkill = new src_app_models_skill__WEBPACK_IMPORTED_MODULE_8__["Skill"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userId = this.activatedRoute.snapshot.params.id;
        this.getBranches();
        this.formValid = false;
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
    updateSkill() {
        this.userSkill.skills = new Array();
        for (const check of this.checkList) {
            if (check.isCheck) {
                const branch = new src_app_models_branch__WEBPACK_IMPORTED_MODULE_2__["Branch"]();
                branch._id = check.id;
                this.userSkill.skills.push(branch);
            }
        }
        this.skillService.updateSkill(this.userSkill).subscribe((res) => {
            if (res.status) {
                src_app_models_util__WEBPACK_IMPORTED_MODULE_9__["Util"].setStorageSkill(res.data);
                this.router.navigate(['/profile']);
            }
            else {
                this.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'profile');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    getBranches() {
        this.branchService.getBranches().subscribe((res) => {
            if (res.status) {
                this.branchList = res.data;
                this.getSkill();
            }
            else {
                this.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'profile');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    getSkill() {
        this.skillService.getSkill(this.userId).subscribe((res) => {
            if (res.status) {
                this.userSkill = res.data;
                this.fillList();
            }
            else {
                this.navigateAlert('¡ERROR AL OBTENER INFORMACION', 'Hubo un problema al intentar obtener informacion del servidor', 'OK', 'profile');
            }
        }, (err) => {
            this.navigateAlert('ERROR DE SERVIDOR', err.message, 'OK', 'my-questions');
        });
    }
    fillList() {
        for (const branch of this.branchList) {
            const check = new src_app_models_check__WEBPACK_IMPORTED_MODULE_3__["Check"]();
            check.id = branch._id;
            check.name = branch.name;
            check.isCheck = false;
            this.checkList.push(check);
        }
        for (const check of this.checkList) {
            if (this.userSkill.skills.find(branch => check.name === branch.name)) {
                check.isCheck = true;
            }
        }
    }
    validateForm() {
        for (const check of this.checkList) {
            if (check.isCheck) {
                this.formValid = true;
                return;
            }
        }
        this.formValid = false;
    }
};
SkillUpdatePage.ctorParameters = () => [
    { type: src_app_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] },
    { type: src_app_services_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
SkillUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skill-update.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skill/skill-update/skill-update.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skill-update.page.scss */ "./src/app/pages/skill/skill-update/skill-update.page.scss")).default]
    })
], SkillUpdatePage);



/***/ })

}]);
//# sourceMappingURL=pages-skill-skill-update-skill-update-module-es2015.js.map