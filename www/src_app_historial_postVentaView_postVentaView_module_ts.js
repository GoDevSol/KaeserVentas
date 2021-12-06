(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_historial_postVentaView_postVentaView_module_ts"],{

/***/ 9405:
/*!*************************************************************************!*\
  !*** ./src/app/historial/postVentaView/postVentaView-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postVentaViewRoutingModule": () => (/* binding */ postVentaViewRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _postVentaView_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postVentaView.page */ 7842);




const routes = [
    {
        path: '',
        component: _postVentaView_page__WEBPACK_IMPORTED_MODULE_0__.postVentaView
    }
];
let postVentaViewRoutingModule = class postVentaViewRoutingModule {
};
postVentaViewRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], postVentaViewRoutingModule);



/***/ }),

/***/ 3832:
/*!*****************************************************************!*\
  !*** ./src/app/historial/postVentaView/postVentaView.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postVentaViewModule": () => (/* binding */ postVentaViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _postVentaView_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postVentaView-routing.module */ 9405);
/* harmony import */ var _postVentaView_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postVentaView.page */ 7842);







let postVentaViewModule = class postVentaViewModule {
};
postVentaViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postVentaView_routing_module__WEBPACK_IMPORTED_MODULE_0__.postVentaViewRoutingModule
        ],
        declarations: [_postVentaView_page__WEBPACK_IMPORTED_MODULE_1__.postVentaView]
    })
], postVentaViewModule);



/***/ }),

/***/ 7842:
/*!***************************************************************!*\
  !*** ./src/app/historial/postVentaView/postVentaView.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postVentaView": () => (/* binding */ postVentaView)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_postVentaView_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postVentaView.page.html */ 2345);
/* harmony import */ var _postVentaView_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postVentaView.page.scss */ 9283);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _modals_addSaleOrder_addSaleOrder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modals/addSaleOrder/addSaleOrder.component */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);







let postVentaView = class postVentaView {
    constructor(navCtrl, api, modalCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.modelosStorage = [];
        this.datosForm = [];
        this.direccionArchivo = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getData();
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    goForward(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('menu/' + ruta);
        });
    }
    showModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_addSaleOrder_addSaleOrder_component__WEBPACK_IMPORTED_MODULE_3__.AddSaleOrderComponent,
                componentProps: {
                    id: ""
                },
                backdropDismiss: false
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.getData();
        });
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var postVenta = yield this.api.getDBItem('postVenta');
            this.modelosStorage = postVenta.datosModelos;
            this.datosForm = postVenta.datosForm;
            this.direccionArchivo = postVenta.direccionArchivo;
            if (this.direccionArchivo != "") {
                this.direccionArchivo = this.direccionArchivo.split('\\')[2];
            }
        });
    }
    Process() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var postVenta = yield this.api.getDBItem('postVenta');
            if (postVenta.direccionArchivo == "") {
                this.api.showToast('Por favor ingrese una orden de compra para poder procesar la cotizacion.', 'Post Venta');
                return;
            }
            var data = {
                id: postVenta.id,
                datosForm: JSON.stringify(postVenta.datosForm),
                datosModelos: JSON.stringify(postVenta.datosModelos),
                direccionArchivo: postVenta.direccionArchivo,
                estado: 3
            };
            yield this.api.modificarCotizacion(data);
            this.api.showToast('Solicitud procesada exitosamente', 'SOLICITUD');
            this.navCtrl.navigateBack('menu/' + 'register');
        });
    }
};
postVentaView.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
postVentaView = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-enviar',
        template: _raw_loader_postVentaView_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postVentaView_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], postVentaView);



/***/ }),

/***/ 9283:
/*!*****************************************************************!*\
  !*** ./src/app/historial/postVentaView/postVentaView.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border: 1px solid #4C7176;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n}\n\nth {\n  border: 1px solid #4C7176;\n  color: #4C7176;\n  background-color: #dddddd;\n}\n\ntd {\n  border-left: 1px solid #4C7176;\n  border-bottom: 1px dashed #4C7176;\n}\n\nion-icon {\n  font-size: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RWZW50YVZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUZBQUE7QUFBSjs7QUFHRTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0c7RUFFQyw2Q0FBQTtBQURKOztBQUlFO0VBQ0UsOENBQUE7QUFESjs7QUFJRTtFQUNFLDZDQUFBO0FBREo7O0FBSUU7RUFDRSw4Q0FBQTtBQURKOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUM7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQURIOztBQUlDO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQURIOztBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6InBvc3RWZW50YVZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiAgLnJvdW5kZWRJbnB1dCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNkU3RTc7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDVweCB3aGl0ZTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwOyAgICBcclxuICAgfVxyXG5cclxuICAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcblxyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuXHJcbnRhYmxlIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRDNzE3NjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGggeyAgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiB0aCB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICM0QzcxNzY7XHJcbiAgIGNvbG9yOiAjNEM3MTc2O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gfVxyXG5cclxuIHRke1xyXG4gICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0QzcxNzY7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzRDNzE3NjtcclxuIH1cclxuXHJcbiBcclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNzVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 2345:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial/postVentaView/postVentaView.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('solicitudes')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('solicitudes')\">\r\n        Solicitud</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      Ejecute la solicitud o editela.\r\n\r\n      <div style=\"margin-top: 20px;border-top: 2px solid #4C7176; padding-top: 10px;\">\r\n        <h1> Datos:</h1>\r\n        <h2> No. de oportunidad: {{datosForm.oportunidad}}</h2>\r\n        <h2> No. de oferta: {{datosForm.oferta}}</h2>\r\n        <h2> Id Cliente: {{datosForm.idCliente}}</h2>\r\n        <h2> Nombre del cliente: {{datosForm.nombreCliente}}</h2>\r\n        <h2> Dirección de entrega: {{datosForm.direccion}}</h2>\r\n        <h2> Contacto: {{datosForm.contacto}} </h2>\r\n        <h2> Condiciones de pago: {{datosForm.condicionPago}}</h2>\r\n        <h2> Moneda: {{datosForm.moneda}}</h2>\r\n        <h2> Porcentaje de descuento: {{datosForm.porcentajeDescuento}}</h2>\r\n        <h2> Correo electrónico del cliente: {{datosForm.correoCliente}}</h2>\r\n\r\n\r\n      </div>\r\n\r\n      <hr>\r\n      <div style=\"border-top: 2px solid #4C7176; padding-top: 10px;\">\r\n        <table>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Unidades</th>\r\n            <th>Descripcion</th>\r\n          </tr>\r\n          <tr *ngFor=\"let item of modelosStorage; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{item.cantidad}}</td>\r\n            <td>{{item.modelo}}</td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n      <div style=\"text-align: -webkit-left; margin-top: 15px;\" *ngIf=\"direccionArchivo.length > 0 \">\r\n        <table>\r\n          <tr>\r\n            <th>\r\n              <ion-icon name=\"document-outline\">\r\n              </ion-icon>\r\n            </th>\r\n            <th>\r\n              <strong>\r\n                {{direccionArchivo}}\r\n              </strong>\r\n            </th>\r\n          </tr>\r\n        </table>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div style=\"text-align: -webkit-center; margin-top: 20px;\">\r\n        <ion-button (click)=\"goTo('solicitudEdit')\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">EDITAR</ion-button>\r\n\r\n\r\n\r\n      </div>\r\n      <div style=\"text-align: -webkit-center; margin-top: 20px;\">\r\n\r\n        <ion-button *ngIf=\"direccionArchivo.length > 0 \" (click)=\"showModal()\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">\r\n          MODIFICAR ORDEN DE COMPRA</ion-button>\r\n\r\n        <ion-button *ngIf=\"direccionArchivo.length == 0 \" (click)=\"showModal()\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">\r\n          AGREGAR ORDEN DE COMPRA</ion-button>\r\n\r\n        <ion-button (click)=\"Process()\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">EJECUTAR</ion-button>\r\n\r\n\r\n\r\n      </div>\r\n    </ion-card-content>\r\n\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_historial_postVentaView_postVentaView_module_ts.js.map