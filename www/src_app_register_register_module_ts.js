(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_register_register_module_ts"],{

/***/ 4066:
/*!*************************************************************!*\
  !*** ./src/app/modals/registerForm/register-form.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponentModule": () => (/* binding */ RegisterFormComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-form.component */ 2471);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);






let RegisterFormComponentModule = class RegisterFormComponentModule {
};
RegisterFormComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent],
        entryComponents: [_register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent],
        exports: [_register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent]
    })
], RegisterFormComponentModule);



/***/ }),

/***/ 1654:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 2133);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 2474:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1654);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 2133);
/* harmony import */ var _modals_registerForm_register_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/registerForm/register-form.module */ 4066);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _modals_registerForm_register_form_module__WEBPACK_IMPORTED_MODULE_2__.RegisterFormComponentModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 2133:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 9200);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 9728);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);






let RegisterPage = class RegisterPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.user = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.api.getInfoUser();
            yield this.api.setDBItem("return", false);
            yield this.api.cleanDBItem("modelos");
            yield this.api.cleanDBItem("datosForm");
            yield this.api.cleanDBItem("postVenta");
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 9728:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.scroll-content {\n  margin-bottom: 0 !important;\n}\n\n.rounded {\n  border-color: #4C7176;\n  border-style: solid;\n  width: 90%;\n  margin-top: 5px;\n  border-radius: 25px;\n  padding: 10px;\n  border-width: 3px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.backgroundOpt {\n  width: 100%;\n  background-color: #E6E7E7;\n  border-radius: 25px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.OptImg {\n  width: 45%;\n  height: 240px;\n}\n\n.OptButton {\n  --border-radius: 25px;\n  --padding: 0 25px;\n  --background: #4C7176;\n}\n\n@media only screen and (max-width: 766px) {\n  .OptImg {\n    width: 35%;\n    height: 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFGQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNEM3MTc2O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDBweCBncmF5O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG4uYmFja2dyb3VuZE9wdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTdFNztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uT3B0SW1nIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5PcHRCdXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAtLXBhZGRpbmc6IDAgMjVweDtcclxuICAtLWJhY2tncm91bmQ6ICM0QzcxNzY7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XHJcbiAgLk9wdEltZyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 9200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div style=\"text-align: -webkit-center;\">\r\n    <div class=\"rounded\">\r\n      MÀS AIRE POR MENOS ENERGIA\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\r\n    <ion-fab-button style=\"--background: #4C7176;\">\r\n      <ion-icon name=\"settings\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n\r\n      <ion-fab-button (click)=\"goTo('profileAll')\" style=\"--background: #ffffff;\" [hidden]=\"user.rol != 3\">\r\n        <ion-icon name=\"person-add\"></ion-icon>\r\n      </ion-fab-button>\r\n\r\n      <ion-fab-button (click)=\"goTo('profile')\" style=\"--background: #ffffff;\">\r\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <ion-grid style=\"margin-top: 25px;\" style=\"text-align: -webkit-center;\">\r\n    <ion-row>\r\n      <ion-col class=\"cell-class\" [hidden]=\"user.rol == 2\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/cotizador.png\"></ion-img>\r\n          <ion-button (click)=\"goTo('cotizacion')\" cli class=\"OptButton\">Cotizador</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/postventa.png\"></ion-img>\r\n          <ion-button (click)=\"goTo('postVenta')\" class=\"OptButton\">Post Venta</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/historial.png\"></ion-img>\r\n          <ion-button (click)=\"goTo('historialMenu')\" class=\"OptButton\">Historial</ion-button>\r\n\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/arranques.png\"></ion-img>\r\n          <ion-button class=\"OptButton\" (click)=\"goTo('arranques')\">Arranques</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/checklist.png\"></ion-img>\r\n          <ion-button class=\"OptButton\" (click)=\"goTo('checklist')\">Checklist</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-img class=\"OptImg\" src=\"assets/img/menu/ada.png\"></ion-img>\r\n          <ion-button (click)=\"goTo('ada')\" class=\"OptButton\">ADA</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"cell-class\" size-xs=\"4\" size-md=\"3\">\r\n        <div class=\"backgroundOpt\">\r\n          <ion-icon name=\"calendar-number-outline\" style=\"width: 60%; height: 230px;\"></ion-icon>\r\n          <br>\r\n          <ion-button (click)=\"goTo('calendar')\" class=\"OptButton\">RESERVAS</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map