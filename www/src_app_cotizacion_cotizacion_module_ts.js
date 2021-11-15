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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_cotizacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cotizacion.page.html */ 1713);
/* harmony import */ var _cotizacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotizacion.page.scss */ 2586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3324);






let CotizacionPage = class CotizacionPage {
    constructor(toastController, formBuilder, navCtrl) {
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.formRegister = this.formBuilder.group({
            oportunidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            oferta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            idCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            condicionPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            moneda: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            porcentajeDescuento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
            correoCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]))
        });
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
    SendEmail(value) {
    }
};
CotizacionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
CotizacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdGl6YWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUZBQUE7QUFBSjs7QUFHRTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBS0c7RUFFQyw2Q0FBQTtBQUhKOztBQU1FO0VBQ0UsOENBQUE7QUFISjs7QUFNRTtFQUNFLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKIiwiZmlsZSI6ImNvdGl6YWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiAgLnJvdW5kZWRJbnB1dCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNkU3RTc7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDVweCB3aGl0ZTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwOyAgICBcclxuICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuXHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaW9uLWRpcnR5IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaW9uLWRpcnR5IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('register')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('register')\">\r\n        Registro</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      Ingresa tus datos y seleeciona los productos\r\n    </ion-card-content>\r\n\r\n    <form [formGroup]=\"formRegister\">\r\n\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input style=\"margin:-0px; --placeholder-font-weight:5px; height: 10px;\" formControlName=\"oportunidad\"\r\n          type=\"text\" placeholder=\"No. de oportunidad\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"oferta\" type=\"text\" placeholder=\"No. de oferta\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"idCliente\" type=\"text\" placeholder=\"Id Cliente\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"nombreCliente\" type=\"email\" placeholder=\"Nombre del cliente\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"direccion\" placeholder=\"Dirección de entrega\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"contacto\" placeholder=\"Contacto\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"condicionPago\" placeholder=\"Condiciones de pago\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"moneda\" placeholder=\"Moneda\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"porcentajeDescuento\" placeholder=\"Porcentaje de descuento\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"correoCliente\" placeholder=\"Correo electrónico del cliente\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <div style=\"text-align: -webkit-center;\">\r\n\r\n        <ion-button (click)=\"goForward('productos')\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">SIGUIENTE</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_cotizacion_cotizacion_module_ts.js.map