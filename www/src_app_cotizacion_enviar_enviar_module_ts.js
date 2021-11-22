(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_cotizacion_enviar_enviar_module_ts"],{

/***/ 7242:
/*!*****************************************!*\
  !*** ./src/app/api/services.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesService": () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


let ServicesService = class ServicesService {
    //URL = "http://localhost/kaeserVentas/api/req/";
    constructor() {
        this.URL = "https://godevsol.tech/kaeserVentas/api/req/";
    }
    //LOGIN
    login(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParamsWithOutAData(this.URL + "login/login.php", credentials);
        });
    }
    //
    getTiposEquipo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitud(this.URL + "TiposEquipo/read.php");
        });
    }
    getTipoEquipoById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParamsReturnOne(this.URL + "TiposEquipo/readById.php", id);
        });
    }
    //MODELO
    getModelosByTipoEquipo(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Modelo/readByIdTipoEquipo.php", id);
        });
    }
    //COTIZACIONES
    readCotizacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitud(this.URL + "Cotizaciones/read.php");
        });
    }
    saveCotizacion(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/create.php", json);
        });
    }
    modificarCotizacion(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/updateById.php", json);
        });
    }
    //FILE
    loadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudSinJSON(this.URL + "upload.php", file);
        });
    }
    getFile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "verificar.php", id);
        });
    }
    //RESOLVE
    resolverSolicitud(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url);
            var result = yield data.json();
            if (result.status == true) {
                return result.data;
            }
            else {
                return [];
            }
        });
    }
    resolverSolicitudParams(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result.data;
        });
    }
    resolverSolicitudParamsReturnOne(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result.data[0];
        });
    }
    resolverSolicitudParamsWithOutAData(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result;
        });
    }
    resolverSolicitudSinJSON(url, file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: file
            });
            var result = yield data.json();
            return result.data;
        });
    }
};
ServicesService.ctorParameters = () => [];
ServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ServicesService);



/***/ }),

/***/ 6051:
/*!************************************************************!*\
  !*** ./src/app/cotizacion/enviar/enviar-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarPageRoutingModule": () => (/* binding */ EnviarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _enviar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviar.page */ 1039);




const routes = [
    {
        path: '',
        component: _enviar_page__WEBPACK_IMPORTED_MODULE_0__.EnviarPage
    }
];
let EnviarPageRoutingModule = class EnviarPageRoutingModule {
};
EnviarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnviarPageRoutingModule);



/***/ }),

/***/ 5114:
/*!****************************************************!*\
  !*** ./src/app/cotizacion/enviar/enviar.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarPageModule": () => (/* binding */ EnviarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _enviar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviar-routing.module */ 6051);
/* harmony import */ var _enviar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviar.page */ 1039);







let EnviarPageModule = class EnviarPageModule {
};
EnviarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _enviar_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnviarPageRoutingModule
        ],
        declarations: [_enviar_page__WEBPACK_IMPORTED_MODULE_1__.EnviarPage]
    })
], EnviarPageModule);



/***/ }),

/***/ 1039:
/*!**************************************************!*\
  !*** ./src/app/cotizacion/enviar/enviar.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarPage": () => (/* binding */ EnviarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_enviar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enviar.page.html */ 285);
/* harmony import */ var _enviar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviar.page.scss */ 7110);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 2604);







let EnviarPage = class EnviarPage {
    constructor(navCtrl, toastController, storage, api) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.storage = storage;
        this.api = api;
        this.modelosStorage = [];
        this.datosForm = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modelosStorage = yield this.storage.get('modelos');
            this.datosForm = yield this.storage.get('datosForm');
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
    handleButtonClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                message: 'Se ha enviado la solicitud de cotizacion exitosamente.',
                header: 'Cotizacion',
                position: 'top',
                duration: 1500
            });
            this.navCtrl.navigateBack('menu/' + 'register');
            toast.present();
        });
    }
    sendMail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = {
                datosForm: JSON.stringify(this.datosForm),
                datosModelos: JSON.stringify(this.modelosStorage),
                direccionArchivo: ""
            };
            const save = yield this.api.saveCotizacion(data);
            this.handleButtonClick();
        });
    }
};
EnviarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
EnviarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-enviar',
        template: _raw_loader_enviar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_enviar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnviarPage);



/***/ }),

/***/ 7110:
/*!****************************************************!*\
  !*** ./src/app/cotizacion/enviar/enviar.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border: 1px solid #4C7176;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n}\n\nth {\n  border: 1px solid #4C7176;\n  color: #4C7176;\n  background-color: #dddddd;\n}\n\ntd {\n  border-left: 1px solid #4C7176;\n  border-bottom: 1px dashed #4C7176;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRztFQUVDLDZDQUFBO0FBREo7O0FBSUU7RUFDRSw4Q0FBQTtBQURKOztBQUlFO0VBQ0UsNkNBQUE7QUFESjs7QUFJRTtFQUNFLDhDQUFBO0FBREo7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQztFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBREg7O0FBSUM7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0FBREgiLCJmaWxlIjoiZW52aWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggd2hpdGU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIC5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaXRlbS1oYXMtZm9jdXMge1xyXG5cclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pb24tZGlydHkge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pb24tZGlydHkge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICB9XHJcblxyXG50YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0QzcxNzY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHsgIFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4gdGgge1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjNEM3MTc2O1xyXG4gICBjb2xvcjogIzRDNzE3NjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuIH1cclxuXHJcbiB0ZHtcclxuICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNEM3MTc2O1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM0QzcxNzY7XHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ 285:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotizacion/enviar/enviar.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('cotizacion')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('cotizacion')\">\r\n        Confirmacion de Envio</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      Verifica los datos de la Solicitud de Cotizacion\r\n\r\n      <div style=\"margin-top: 20px;border-top: 2px solid #4C7176; padding-top: 10px;\">\r\n        <h1> Datos:</h1>\r\n        <h2> No. de oportunidad: {{datosForm.oportunidad}}</h2>\r\n        <h2> No. de oferta: {{datosForm.oferta}}</h2>\r\n        <h2> Id Cliente: {{datosForm.idCliente}}</h2>\r\n        <h2> Nombre del cliente: {{datosForm.nombreCliente}}</h2>\r\n        <h2> Dirección de entrega: {{datosForm.direccion}}</h2>\r\n        <h2> Contacto: {{datosForm.contacto}} </h2>\r\n        <h2> Condiciones de pago: {{datosForm.condicionPago}}</h2>\r\n        <h2> Moneda: {{datosForm.moneda}}</h2>\r\n        <h2> Porcentaje de descuento: {{datosForm.porcentajeDescuento}}</h2>\r\n        <h2> Correo electrónico del cliente: {{datosForm.correoCliente}}</h2>\r\n\r\n\r\n      </div>\r\n\r\n      <hr>\r\n      <div style=\"border-top: 2px solid #4C7176; padding-top: 10px;\">\r\n        <table>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Unidades</th>\r\n            <th>Descripcion</th>\r\n          </tr>\r\n          <tr *ngFor=\"let item of modelosStorage; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{item.cantidad}}</td>\r\n            <td>{{item.modelo}}</td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n\r\n\r\n      <div style=\"text-align: -webkit-center; margin-top: 20px;\">\r\n\r\n        <ion-button (click)=\"sendMail('enviar')\" type=\"submit\"\r\n          style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">ENVIAR</ion-button>\r\n      </div>\r\n    </ion-card-content>\r\n\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_cotizacion_enviar_enviar_module_ts.js.map