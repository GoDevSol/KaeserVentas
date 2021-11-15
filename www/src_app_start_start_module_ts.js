(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_start_start_module_ts"],{

/***/ 5189:
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 3062);




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartPageRoutingModule);



/***/ }),

/***/ 4131:
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-routing.module */ 5189);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page */ 3062);







let StartPageModule = class StartPageModule {
};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage]
    })
], StartPageModule);



/***/ }),

/***/ 3062:
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./start.page.html */ 4022);
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss */ 1234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let StartPage = class StartPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    loginUser() {
        this.router.navigateByUrl("menu/register");
    }
};
StartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StartPage);



/***/ }),

/***/ 1234:
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  margin-top: 5px;\n  --border-radius: 25px;\n  --border-width: 2px;\n  --box-shadow: 0px gray;\n  --color: black;\n  --highlight-height: 0;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFGQUFBO0FBQ0o7O0FBR0E7RUFFSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFDQSw2Q0FBQTtFQUNFLGVBQUE7RUFDRixxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFBIiwiZmlsZSI6InN0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcblxyXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcclxue1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucm91bmRlZElucHV0IHtcclxuLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4tLWJvcmRlci13aWR0aDogMnB4O1xyXG4tLWJveC1zaGFkb3c6IDBweCBncmF5O1xyXG4tLWNvbG9yOiBibGFjaztcclxuLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */");

/***/ }),

/***/ 4022:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"vertical-align-content\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"text-align: -webkit-center;\">\r\n          <ion-img style=\"width:70%;\r\n                      display: block;\" src=\"assets/img/login/logo.png\">\r\n          </ion-img>\r\n        </div>\r\n\r\n\r\n        <ion-item class=\"roundedInput\">\r\n          <ion-input placeholder=\"Usuario\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"roundedInput\">\r\n          <ion-input placeholder=\"Contraseña\"></ion-input>\r\n        </ion-item>\r\n\r\n        <div style=\"text-align: -webkit-center;\">\r\n          <ion-button style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;\" (click)=\"loginUser()\">\r\n            Iniciar\r\n            Sesiòn</ion-button>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_start_start_module_ts.js.map