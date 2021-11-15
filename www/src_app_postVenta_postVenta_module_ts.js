(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_postVenta_postVenta_module_ts"],{

/***/ 1078:
/*!*******************************************************!*\
  !*** ./src/app/postVenta/postVenta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVentaPageRoutingModule": () => (/* binding */ PostVentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _postVenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postVenta.page */ 7743);




const routes = [
    {
        path: '',
        component: _postVenta_page__WEBPACK_IMPORTED_MODULE_0__.PostVentaPage
    }
];
let PostVentaPageRoutingModule = class PostVentaPageRoutingModule {
};
PostVentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostVentaPageRoutingModule);



/***/ }),

/***/ 7838:
/*!***********************************************!*\
  !*** ./src/app/postVenta/postVenta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVentaPageModule": () => (/* binding */ PostVentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _postVenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postVenta-routing.module */ 1078);
/* harmony import */ var _postVenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postVenta.page */ 7743);







let PostVentaPageModule = class PostVentaPageModule {
};
PostVentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postVenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostVentaPageRoutingModule
        ],
        declarations: [_postVenta_page__WEBPACK_IMPORTED_MODULE_1__.PostVentaPage]
    })
], PostVentaPageModule);



/***/ }),

/***/ 7743:
/*!*********************************************!*\
  !*** ./src/app/postVenta/postVenta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVentaPage": () => (/* binding */ PostVentaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_postVenta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postVenta.page.html */ 7177);
/* harmony import */ var _postVenta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postVenta.page.scss */ 3746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3324);






let PostVentaPage = class PostVentaPage {
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
            this.formRegister.reset();
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    SendEmail(value) {
    }
};
PostVentaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
PostVentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-postVenta',
        template: _raw_loader_postVenta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postVenta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostVentaPage);



/***/ }),

/***/ 3746:
/*!***********************************************!*\
  !*** ./src/app/postVenta/postVenta.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RWZW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFLRztFQUVDLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0UsNkNBQUE7QUFISjs7QUFNRTtFQUNFLDhDQUFBO0FBSEoiLCJmaWxlIjoicG9zdFZlbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggd2hpdGU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcblxyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 7177:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postVenta/postVenta.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('register')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('register')\">\r\n        Cotizaciones</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      Ingresa tus datos y seleeciona los productos\r\n    </ion-card-content>\r\n\r\n    <form [formGroup]=\"formRegister\">\r\n\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input style=\"margin:-0px; --placeholder-font-weight:5px; height: 10px;\" formControlName=\"oportunidad\"\r\n          type=\"text\" placeholder=\"No. de oportunidad\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"oferta\" type=\"text\" placeholder=\"No. de oferta\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"idCliente\" type=\"text\" placeholder=\"Id Cliente\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"nombreCliente\" type=\"email\" placeholder=\"Nombre del cliente\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"direccion\" placeholder=\"Dirección de entrega\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"contacto\" placeholder=\"Contacto\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"condicionPago\" placeholder=\"Condiciones de pago\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"moneda\" placeholder=\"Moneda\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"porcentajeDescuento\" placeholder=\"Porcentaje de descuento\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"roundedInput\">\r\n        <ion-input formControlName=\"correoCliente\" placeholder=\"Correo electrónico del cliente\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <div style=\"text-align: -webkit-center;\">\r\n        <ion-button (click)=\"SendEmail(formRegister.value)\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">GUARDAR</ion-button>\r\n\r\n        <ion-button [disabled]=\"!formRegister.valid\" (click)=\"SendEmail(formRegister.value)\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">CONFIRMAR</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_postVenta_postVenta_module_ts.js.map