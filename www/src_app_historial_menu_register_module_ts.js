(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_historial_menu_register_module_ts"],{

/***/ 4505:
/*!***********************************************************!*\
  !*** ./src/app/historial/menu/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9451);




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

/***/ 2788:
/*!***************************************************!*\
  !*** ./src/app/historial/menu/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 4505);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9451);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9451:
/*!*************************************************!*\
  !*** ./src/app/historial/menu/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 7594);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 75);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);





let RegisterPage = class RegisterPage {
    constructor(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 75:
/*!***************************************************!*\
  !*** ./src/app/historial/menu/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.scroll-content {\n  margin-bottom: 0 !important;\n}\n\n.rounded {\n  border-color: #4C7176;\n  border-style: solid;\n  width: 90%;\n  margin-top: 5px;\n  border-radius: 25px;\n  padding: 10px;\n  border-width: 3px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.backgroundOpt {\n  width: 100%;\n  background-color: #E6E7E7;\n  border-radius: 25px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.OptImg {\n  width: 45%;\n  height: 240px;\n}\n\n.OptButton {\n  --border-radius: 25px;\n  --padding: 0 25px;\n  --background: #4C7176;\n}\n\n@media only screen and (max-width: 766px) {\n  .OptImg {\n    width: 35%;\n    height: 130px;\n  }\n\n  .cell-class {\n    border-left: #4C7176 solid;\n  }\n}\n\n@media only screen and (min-width: 766px) {\n  .cell-class-border {\n    border-left: #4C7176 solid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFGQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDQTs7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQUZGOztFQUlBO0lBQ0EsMEJBQUE7RUFEQTtBQUNGOztBQUtBO0VBQ0U7SUFDQSwwQkFBQTtFQUhBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2xvZ2luL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZCB7XHJcbmJvcmRlci1jb2xvcjogIzRDNzE3NjtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxud2lkdGg6IDkwJTtcclxubWFyZ2luLXRvcDogNXB4O1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5ib3JkZXItd2lkdGg6IDNweDtcclxuYm94LXNoYWRvdzogMHB4IGdyYXk7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG4uYmFja2dyb3VuZE9wdHtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRTZFN0U3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5PcHRJbWd7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4uT3B0QnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAtLXBhZGRpbmc6IDAgMjVweDsgXHJcbiAgLS1iYWNrZ3JvdW5kOiAjNEM3MTc2O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gIC5PcHRJbWd7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICB9XHJcbiAgLmNlbGwtY2xhc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiAjNEM3MTc2IHNvbGlkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY2cHgpIHtcclxuICAuY2VsbC1jbGFzcy1ib3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiAjNEM3MTc2IHNvbGlkO1xyXG59XHJcbn0iXX0= */");

/***/ }),

/***/ 7594:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial/menu/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('postVentaView')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('postVentaView')\">\r\n        Historial</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n  <ion-content fullscreen>\r\n\r\n\r\n\r\n    <ion-grid style=\"margin-top: 25px;\" style=\"text-align: -webkit-center;\">\r\n      <ion-row>\r\n        <ion-col size-xs=\"6\" size-md=\"6\">\r\n          <div class=\"backgroundOpt\">\r\n            <ion-img class=\"OptImg\" src=\"assets/img/menu/cotizador.png\"></ion-img>\r\n            <ion-button (click)=\"goTo('cotizacion')\" cli class=\"OptButton\">Cotizador</ion-button>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"cell-class-border cell-class\" size-xs=\"6\" size-md=\"6\">\r\n          <div class=\"backgroundOpt\">\r\n            <ion-img class=\"OptImg\" src=\"assets/img/menu/postventa.png\"></ion-img>\r\n            <ion-button (click)=\"goTo('postVenta')\" class=\"OptButton\">Post Venta</ion-button>\r\n          </div>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n  </ion-content>\r\n\r\n  <ion-footer text-center no-border transparent style=\"background:white\">\r\n    <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n      <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n    </div>\r\n  </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_historial_menu_register_module_ts.js.map