(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_arranques_3_arranques_module_ts"],{

/***/ 4534:
/*!*********************************************************!*\
  !*** ./src/app/arranques/3/arranques-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArranquesPageRoutingModule": () => (/* binding */ ArranquesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _arranques_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arranques.page */ 1014);




const routes = [
    {
        path: '',
        component: _arranques_page__WEBPACK_IMPORTED_MODULE_0__.ArranquesPage
    }
];
let ArranquesPageRoutingModule = class ArranquesPageRoutingModule {
};
ArranquesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArranquesPageRoutingModule);



/***/ }),

/***/ 7852:
/*!*************************************************!*\
  !*** ./src/app/arranques/3/arranques.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArranquesPageModule": () => (/* binding */ ArranquesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _arranques_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arranques-routing.module */ 4534);
/* harmony import */ var _arranques_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arranques.page */ 1014);







let ArranquesPageModule = class ArranquesPageModule {
};
ArranquesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _arranques_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArranquesPageRoutingModule
        ],
        declarations: [_arranques_page__WEBPACK_IMPORTED_MODULE_1__.ArranquesPage]
    })
], ArranquesPageModule);



/***/ }),

/***/ 1014:
/*!***********************************************!*\
  !*** ./src/app/arranques/3/arranques.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArranquesPage": () => (/* binding */ ArranquesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_arranques_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./arranques.page.html */ 2260);
/* harmony import */ var _arranques_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arranques.page.scss */ 1309);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);






let ArranquesPage = class ArranquesPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.options = [
            { equipo: "Ventilación correcta", estado: "", recomendacion: "", },
            { equipo: "Distancia a paredes y equipos", estado: "", recomendacion: "", },
            { equipo: "Válvula seguridad compresor", estado: "", recomendacion: "", },
            { equipo: "Conexión neumática flexible", estado: "", recomendacion: "", },
            { equipo: "Soportería adecuada", estado: "", recomendacion: "", },
            { equipo: "Válvula de prueba", estado: "", recomendacion: "", },
            { equipo: "Válvula de isolación", estado: "", recomendacion: "", },
            { equipo: "Cuello Ganzo salida Compr.", estado: "", recomendacion: "", },
            { equipo: "Diámetro de tubería aire", estado: "", recomendacion: "", },
            { equipo: "Purga hacia Drenaje", estado: "", recomendacion: "", },
            { equipo: "Nivel del piso", estado: "", recomendacion: "", },
            { equipo: "Conexión eléctrica adecuada", estado: "", recomendacion: "", },
            { equipo: "Tamaño Flip - on", estado: "", recomendacion: "", },
            { equipo: "Cable Calibre No.", estado: "", recomendacion: "", },
            { equipo: "Diámetro ducto eléctrico", estado: "", recomendacion: "", },
            { equipo: "Temperatura del Cuarto", estado: "", recomendacion: "", },
            { equipo: "Tierra Física Comp.Std", estado: "", recomendacion: "", },
            { equipo: "Tierra Física Comp.Vel variable", estado: "", recomendacion: "", },
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
    show() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.options);
        });
    }
    goForward(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('menu/' + ruta);
        });
    }
};
ArranquesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
ArranquesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'arranques',
        template: _raw_loader_arranques_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_arranques_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArranquesPage);



/***/ }),

/***/ 1309:
/*!*************************************************!*\
  !*** ./src/app/arranques/3/arranques.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.rounded {\n  border-color: #4C7176;\n  border-style: solid;\n  width: 90%;\n  margin-top: 5px;\n  border-radius: 25px;\n  padding: 10px;\n  border-width: 3px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.rounded-text {\n  border-style: solid;\n  width: 95%;\n  margin-top: 5px;\n  border-radius: 10px;\n  background-color: #a3a3a3;\n  padding: 10px;\n  border-width: 1px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.widhte {\n  width: 95%;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #4C7176 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmFucXVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFLRztFQUVDLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0UsNkNBQUE7QUFISjs7QUFNRTtFQUNFLDhDQUFBO0FBSEo7O0FBTUU7RUFDRixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUhBOztBQU1BO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFKQTs7QUFPQTtFQUVBLFVBQUE7QUFMQTs7QUFXQTtFQUNFLHlCQUFBO0FBUkYiLCJmaWxlIjoiYXJyYW5xdWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggd2hpdGU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcblxyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuXHJcbiAgLnJvdW5kZWQge1xyXG5ib3JkZXItY29sb3I6ICM0QzcxNzY7XHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbndpZHRoOiA5MCU7XHJcbm1hcmdpbi10b3A6IDVweDtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxucGFkZGluZzogMTBweDtcclxuYm9yZGVyLXdpZHRoOiAzcHg7XHJcbmJveC1zaGFkb3c6IDBweCBncmF5O1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuICBcclxuLnJvdW5kZWQtdGV4dCB7XHJcblxyXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG53aWR0aDogOTUlO1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcclxucGFkZGluZzogMTBweDtcclxuYm9yZGVyLXdpZHRoOiAxcHg7XHJcbmJveC1zaGFkb3c6IDBweCBncmF5O1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi53aWRodGUge1xyXG5cclxud2lkdGg6IDk1JTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgPiBpb24tbGFiZWx7XHJcbiAgY29sb3I6ICAjNEM3MTc2ICAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 2260:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/arranques/3/arranques.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('arranques-first')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('arranques-first')\">\r\n        Check List</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n    </ion-card-content>\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <div class=\"rounded\">\r\n        Compresor bien instalado\r\n      </div>\r\n    </div>\r\n\r\n    <ion-grid *ngFor=\"let item of options; let i = index\">\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-item class=\"roundedInput\">\r\n            <ion-label class=\"colorGreen\" position=\"floating\">Equipo a Revisar:</ion-label>\r\n            <ion-input [(ngModel)]=\"item.equipo\" disabled=\"true\" clearInput=\"true\" placeholder=\"Equipo a Revisar\"\r\n              clearInput=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-item class=\"roundedInput\">\r\n            <ion-label class=\"colorGreen\" position=\"floating\">Estado:</ion-label>\r\n            <ion-input [(ngModel)]=\"item.estado\" clearInput=\"true\" type=\"text\" placeholder=\"Estado\" clearInput=\"true\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"7\" style=\"text-align: center;\">\r\n          <ion-item class=\"roundedInput\">\r\n            <ion-label position=\"floating\">Recomendaciones:</ion-label>\r\n            <ion-input [(ngModel)]=\"item.recomendacion\" clearInput=\"true\" type=\"text\" placeholder=\"Recomendaciones\"\r\n              clearInput=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <hr style=\"height: 0px;color:  #4C7176; border:1px dashed;\">\r\n    </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n\r\n      <ion-button (click)=\"goForward('arranques-first')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">ANTERIOR</ion-button>\r\n\r\n      <ion-button (click)=\"goForward('arranques-third')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">SIGUIENTE</ion-button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_arranques_3_arranques_module_ts.js.map