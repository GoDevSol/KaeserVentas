(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_checklist_5_checklist_module_ts"],{

/***/ 5635:
/*!*********************************************************!*\
  !*** ./src/app/checklist/5/checklist-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPageRoutingModule": () => (/* binding */ ChecklistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _checklist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist.page */ 3427);




const routes = [
    {
        path: '',
        component: _checklist_page__WEBPACK_IMPORTED_MODULE_0__.ChecklistPage
    }
];
let ChecklistPageRoutingModule = class ChecklistPageRoutingModule {
};
ChecklistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChecklistPageRoutingModule);



/***/ }),

/***/ 504:
/*!*************************************************!*\
  !*** ./src/app/checklist/5/checklist.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPageModule": () => (/* binding */ ChecklistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist-routing.module */ 5635);
/* harmony import */ var _checklist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.page */ 3427);







let ChecklistPageModule = class ChecklistPageModule {
};
ChecklistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChecklistPageRoutingModule
        ],
        declarations: [_checklist_page__WEBPACK_IMPORTED_MODULE_1__.ChecklistPage]
    })
], ChecklistPageModule);



/***/ }),

/***/ 3427:
/*!***********************************************!*\
  !*** ./src/app/checklist/5/checklist.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistPage": () => (/* binding */ ChecklistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_checklist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checklist.page.html */ 192);
/* harmony import */ var _checklist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.page.scss */ 4928);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);






let ChecklistPage = class ChecklistPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.options = [
            { cable: "", SC1DP: "", SC2DP: "", SC2SNW: "", Modelo: "", PMax: "", Año: "", }
        ];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    goForward(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('menu/' + ruta);
        });
    }
    sumar() {
        this.options.push({ cable: "", SC1DP: "", SC2DP: "", SC2SNW: "", Modelo: "", PMax: "", Año: "", });
    }
    restar(model) {
        if (!(this.options.length == 1)) {
            this.options.splice(model, 1);
        }
    }
};
ChecklistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
ChecklistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'checklist',
        template: _raw_loader_checklist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checklist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChecklistPage);



/***/ }),

/***/ 4928:
/*!*************************************************!*\
  !*** ./src/app/checklist/5/checklist.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.rounded {\n  border-color: #4C7176;\n  border-style: solid;\n  width: 90%;\n  margin-top: 5px;\n  border-radius: 25px;\n  padding: 10px;\n  border-width: 3px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.rounded-text {\n  border-style: solid;\n  width: 95%;\n  margin-top: 5px;\n  border-radius: 10px;\n  background-color: #a3a3a3;\n  padding: 10px;\n  border-width: 1px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.widhte {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFLRztFQUVDLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0UsNkNBQUE7QUFISjs7QUFNRTtFQUNFLDhDQUFBO0FBSEo7O0FBTUU7RUFDRixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUhBOztBQU1BO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFKQTs7QUFPQTtFQUVBLFVBQUE7QUFMQSIsImZpbGUiOiJjaGVja2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiAgLnJvdW5kZWRJbnB1dCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNkU3RTc7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDVweCB3aGl0ZTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwOyAgICBcclxuICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuXHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaW9uLWRpcnR5IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaW9uLWRpcnR5IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICAucm91bmRlZCB7XHJcbmJvcmRlci1jb2xvcjogIzRDNzE3NjtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxud2lkdGg6IDkwJTtcclxubWFyZ2luLXRvcDogNXB4O1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5ib3JkZXItd2lkdGg6IDNweDtcclxuYm94LXNoYWRvdzogMHB4IGdyYXk7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG4gIFxyXG4ucm91bmRlZC10ZXh0IHtcclxuXHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbndpZHRoOiA5NSU7XHJcbm1hcmdpbi10b3A6IDVweDtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5ib3JkZXItd2lkdGg6IDFweDtcclxuYm94LXNoYWRvdzogMHB4IGdyYXk7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLndpZGh0ZSB7XHJcblxyXG53aWR0aDogOTUlO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 192:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checklist/5/checklist.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('checklist-four')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('checklist-four')\">\r\n        Check list</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      <span style=\"font-size: larger;\"> Ingresa tus datos y seleeciona los productos</span>\r\n    </ion-card-content>\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <div class=\"rounded\">\r\n        Señales a conectar al SAM 4.0\r\n      </div>\r\n      <h3 style=\"color: #4C7176;\">Salida Digital </h3>\r\n    </div>\r\n    <div style=\"text-align: -webkit-left;\">\r\n      <ion-grid *ngFor=\"let option of options; let i = index\">\r\n        <span style=\"margin-left: 25px;font-size: larger; color: #4C7176;\">DO: {{i+1}}</span>\r\n\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label class=\"colorGreen\" position=\"floating\">Salida digital:</ion-label>\r\n              <ion-input clearInput=\"true\" type=\"text\" placeholder=\"Salida digital\" clearInput=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n\r\n\r\n        </ion-row>\r\n\r\n        <hr style=\"height: 0px;color:  #4C7176; border:1px dashed;\">\r\n      </ion-grid>\r\n      <div style=\"text-align: -webkit-right;\">\r\n        <ion-button (click)=\"sumar()\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">Agregar +</ion-button>\r\n      </div>\r\n      <hr style=\"height: 0px;color:  #4C7176; border:1px dashed;\">\r\n    </div>\r\n\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <ion-button (click)=\"goForward('checklist-four')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">ANTERIOR</ion-button>\r\n      <ion-button (click)=\"goForward('checklist-six')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">SIGUIENTE</ion-button>\r\n    </div>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_checklist_5_checklist_module_ts.js.map