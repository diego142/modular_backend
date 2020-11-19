(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"headerColor\">\n    <ion-title>Usuarios (Admin)\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"events\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ios\">\n\n  <ion-list>\n\n    <ion-item *ngFor=\"let user of usersList\">\n\n      <ion-thumbnail  slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n        <ion-button color=\"danger\" (click)=\"confirmDelete(user._id)\">  <ion-icon name=\"trash\"></ion-icon> </ion-button>\n        <ion-button color=\"secondary\" (click)=\"presentActionSheet(user._id)\">  <ion-icon name=\"lock-open\"></ion-icon> </ion-button>\n      </ion-thumbnail >\n      <ion-label class=\"ion-text-wrap\">\n        <strong>{{ user.name + ' ' + user.lastName}}</strong>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Rol: </strong> {{ (user.permission == 0) ? 'Usuario' :'Admin' }}</ion-text>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Código: </strong> {{ user.code }}</ion-text>\n        <ion-text color=\"primary\" style=\"display: block;\"> <strong style=\"color: rgb(124, 124, 124)\">Email: </strong> {{ user.email }}</ion-text>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/user/users/users-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/users/users-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/user/users/users.page.ts");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/user/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/user/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/user/users/users.page.ts");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/pages/user/users/users.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/user/users/users.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlcnMvdXNlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user/users/users.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/user/users/users.page.ts ***!
  \************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let UsersPage = class UsersPage {
    constructor(userService, actionSheetController, alertController) {
        this.userService = userService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.usersList = new Array();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUsers();
    }
    confirmPermission(pmsn, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¡CONFIRMAR!',
                message: '¿Estas seguro que deseas conceder el permiso de ' + ((pmsn === 0) ? ' solo USUARIO' : 'ADMINISTRADOR') + '?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: () => {
                            this.changePermission(pmsn, id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmDelete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¡CONFIRMAR!',
                message: '¿Estas seguro que deseas eliminar este usuario?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Si',
                        role: 'danger',
                        handler: () => {
                            this.deleteUser(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentActionSheet(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Permisos',
                mode: 'ios',
                buttons: [{
                        text: 'Administrador',
                        icon: '',
                        handler: () => {
                            this.confirmPermission(1, id);
                        }
                    }, {
                        text: 'Usuario',
                        icon: '',
                        handler: () => {
                            this.confirmPermission(0, id);
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getUsers() {
        this.userService.getUsers().subscribe((res) => {
            this.usersList = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    changePermission(pmsn, id) {
        this.userService.updatePermission(pmsn, id).subscribe((res) => {
            if (res.status) {
                const ind = this.usersList.findIndex(user => user._id === res.data._id);
                this.usersList[ind].permission = pmsn;
            }
        }, (err) => {
            console.log(err);
        });
    }
    deleteUser(id) {
        this.userService.deleteUser(id).subscribe((res) => {
            if (res.status) {
                const ind = this.usersList.findIndex(user => user._id === res.data._id);
                this.usersList.splice(ind, 1);
            }
        }, (err) => {
        });
    }
};
UsersPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/users/users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/user/users/users.page.scss")).default]
    })
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-users-users-module-es2015.js.map