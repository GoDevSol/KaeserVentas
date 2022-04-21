(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_cotizacion_cotizacion_module_ts"],{

/***/ 8346:
/*!*********************************************************!*\
  !*** ./src/app/cotizacion/cotizacion-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizacionPageRoutingModule": () => (/* binding */ CotizacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _cotizacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cotizacion.page */ 5748);




const routes = [
    {
        path: '',
        component: _cotizacion_page__WEBPACK_IMPORTED_MODULE_0__.CotizacionPage
    }
];
let CotizacionPageRoutingModule = class CotizacionPageRoutingModule {
};
CotizacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CotizacionPageRoutingModule);



/***/ }),

/***/ 9421:
/*!*************************************************!*\
  !*** ./src/app/cotizacion/cotizacion.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizacionPageModule": () => (/* binding */ CotizacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _cotizacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cotizacion-routing.module */ 8346);
/* harmony import */ var _cotizacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotizacion.page */ 5748);







let CotizacionPageModule = class CotizacionPageModule {
};
CotizacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cotizacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.CotizacionPageRoutingModule
        ],
        declarations: [_cotizacion_page__WEBPACK_IMPORTED_MODULE_1__.CotizacionPage]
    })
], CotizacionPageModule);



/***/ }),

/***/ 5748:
/*!***********************************************!*\
  !*** ./src/app/cotizacion/cotizacion.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizacionPage": () => (/* binding */ CotizacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_cotizacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cotizacion.page.html */ 1713);
/* harmony import */ var _cotizacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotizacion.page.scss */ 2586);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);







let CotizacionPage = class CotizacionPage {
    constructor(formBuilder, navCtrl, api) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.api = api;
        this.formRegister = this.formBuilder.group({
            oportunidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            oferta: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            idCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            condicionPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            moneda: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            porcentajeDescuento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            correoCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]))
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var datosForm = this.api.getDBItem("datosForm");
            this.formRegister.controls.oportunidad.setValue(datosForm.oportunidad);
            this.formRegister.controls.oferta.setValue(datosForm.oferta);
            this.formRegister.controls.idCliente.setValue(datosForm.idCliente);
            this.formRegister.controls.nombreCliente.setValue(datosForm.nombreCliente);
            this.formRegister.controls.direccion.setValue(datosForm.direccion);
            this.formRegister.controls.contacto.setValue(datosForm.contacto);
            this.formRegister.controls.condicionPago.setValue(datosForm.condicionPago);
            this.formRegister.controls.moneda.setValue(datosForm.moneda);
            this.formRegister.controls.porcentajeDescuento.setValue(datosForm.porcentajeDescuento);
            this.formRegister.controls.correoCliente.setValue(datosForm.correoCliente);
            this.formRegister.controls.observacion.setValue(datosForm.observacion);
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    goForward(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.api.setDBItem("datosForm", this.formRegister.value);
            this.navCtrl.navigateForward('menu/' + ruta);
        });
    }
};
CotizacionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
CotizacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cotizacion',
        template: _raw_loader_cotizacion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cotizacion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CotizacionPage);



/***/ }),

/***/ 2586:
/*!*************************************************!*\
  !*** ./src/app/cotizacion/cotizacion.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\nion-item.item-has-focus > ion-label {\n  color: #4C7176 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdGl6YWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUZBQUE7QUFBSjs7QUFHRTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBS0c7RUFFQyw2Q0FBQTtBQUhKOztBQU1FO0VBQ0UsOENBQUE7QUFISjs7QUFNRTtFQUNFLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0EseUJBQUE7QUFIRiIsImZpbGUiOiJjb3RpemFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggd2hpdGU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcblxyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgPiBpb24tbGFiZWx7XHJcbiAgY29sb3I6ICAjNEM3MTc2ICAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 1713:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotizacion/cotizacion.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('register')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('register')\">\r\n        Registro</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      Ingresa tus datos y seleeciona los productos\r\n    </ion-card-content>\r\n\r\n    <form [formGroup]=\"formRegister\">\r\n\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">No. de Oportunidad:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"oportunidad\" type=\"text\" clearInput=\"true\"\r\n          placeholder=\"No. de oportunidad\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">No. de Oferta:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"oferta\" type=\"number\" placeholder=\"No. de oferta\"\r\n          clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Id Cliente:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"idCliente\" type=\"number\" placeholder=\"Id Cliente\"\r\n          clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Nombre del Cliente:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"nombreCliente\" type=\"name\" name=\"name\"\r\n          placeholder=\"Nombre del cliente\" clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Dirección de entrega:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"direccion\" placeholder=\"Dirección de entrega\" clearInput=\"true\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Telefono Contacto:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"contacto\" type=\"tel\" name=\"tel\" placeholder=\"Telefono Contacto\"\r\n          clearInput=\"true\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Condicion de Pago:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"condicionPago\" placeholder=\"Condiciones de pago\"\r\n          clearInput=\"true\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Moneda:</ion-label>\r\n        <ion-select clearInput=\"true\" formControlName=\"moneda\">\r\n          <ion-select-option value=\"GTQ (Q)\">GTQ (Q)</ion-select-option>\r\n          <ion-select-option value=\"USD ($)\">USD ($)</ion-select-option>\r\n          <ion-select-option value=\"HNL (L)\">HNL (L)</ion-select-option>\r\n          <ion-select-option value=\"HNL (₡)\">CRC (₡)</ion-select-option>\r\n        </ion-select>\r\n\r\n\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Porcentaje de Descuento:</ion-label>\r\n        <ion-input type=\"number\" clearInput=\"true\" formControlName=\"porcentajeDescuento\"\r\n          placeholder=\"Porcentaje de descuento\" clearInput=\"true\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Correo electrónico del cliente:</ion-label>\r\n        <ion-input clearInput=\"true\" formControlName=\"correoCliente\" multiple=\"true\" type=\"email\"\r\n          placeholder=\"Correo electrónico del cliente\" clearInput=\"true\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-label position=\"floating\">Observaciones:</ion-label>\r\n        <ion-textarea rows=\"6\" formControlName=\"observacion\" clearInput=\"true\" placeholder=\"Observaciones\">\r\n        </ion-textarea>\r\n\r\n      </ion-item>\r\n\r\n\r\n\r\n      <div style=\"text-align: -webkit-center;\">\r\n\r\n        <ion-button (click)=\"goForward('productos')\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">SIGUIENTE</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_cotizacion_cotizacion_module_ts.js.map