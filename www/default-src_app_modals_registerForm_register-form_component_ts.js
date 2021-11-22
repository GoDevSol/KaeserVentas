(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["default-src_app_modals_registerForm_register-form_component_ts"],{

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

/***/ 2471:
/*!****************************************************************!*\
  !*** ./src/app/modals/registerForm/register-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponent": () => (/* binding */ RegisterFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-form.component.html */ 9190);
/* harmony import */ var _register_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-form.component.scss */ 6356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 2604);







let RegisterFormComponent = class RegisterFormComponent {
    constructor(modalCtrl, storage, api) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.api = api;
        this.tipoEquipo = { tipo: "" };
        this.modelos = [];
        this.modelosAll = [];
        this.modelosAgregados = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modelos = yield this.api.getModelosByTipoEquipo({ "idTipoEquipo": this.id });
            this.modelos = this.modelos.map(x => (Object.assign(Object.assign({}, x), { cantidad: 0 })));
            this.modelosAll = this.modelos.filter(s => s.modelo.includes(""));
            this.tipoEquipo = yield this.api.getTipoEquipoById({ "id": this.id });
            this.modelosAgregados = yield this.storage.get('modelos');
            this.modelosAgregados.forEach(element => {
                if (element.idTipoEquipo == this.id) {
                    this.upsert(this.modelos, element);
                }
            });
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.create();
            this.storage.set("modelos", this.modelosAgregados);
            yield this.modalCtrl.dismiss();
        });
    }
    filter(event) {
        this.modelos = this.modelosAll.filter(s => s.modelo.includes(event.value));
    }
    sumar(model) {
        model.cantidad++;
        this.upsert(this.modelosAgregados, model);
    }
    restar(model) {
        if (!(model.cantidad == 0)) {
            model.cantidad--;
            this.upsert(this.modelosAgregados, model);
        }
    }
    upsert(array, element) {
        const i = array.findIndex(_element => _element.id === element.id);
        if (element.cantidad == 0)
            array.splice(i, 1);
        else if (i > -1)
            array[i] = element; // (2)
        else
            array.push(element);
    }
};
RegisterFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
RegisterFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register-form',
        template: _raw_loader_register_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterFormComponent);



/***/ }),

/***/ 6356:
/*!******************************************************************!*\
  !*** ./src/app/modals/registerForm/register-form.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\nh1 {\n  font-size: larger;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  margin-top: 5px;\n  --border-radius: 25px;\n  --border-width: 2px;\n  --box-shadow: 0px gray;\n  --color: black;\n  --highlight-height: 0;\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRkFBQTtBQUNKOztBQUVDO0VBQ0UsaUJBQUE7QUFDSDs7QUFFQztFQUNELDZDQUFBO0VBQ0UsZUFBQTtFQUNGLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0EiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbi9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiBoMXtcclxuICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiB9XHJcblxyXG4gLnJvdW5kZWRJbnB1dCB7XHJcbi0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbi0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuLS1ib3JkZXItd2lkdGg6IDJweDtcclxuLS1ib3gtc2hhZG93OiAwcHggZ3JheTtcclxuLS1jb2xvcjogYmxhY2s7XHJcbi0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */");

/***/ }),

/***/ 9190:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/registerForm/register-form.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-title>{{tipoEquipo.tipo.toUpperCase()}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">X</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div style=\"text-align: -webkit-center;\">\r\n    <ion-item class=\"roundedInput\" style=\"width:90%;\">\r\n      <ion-input type=\"text\" placeholder=\"Busqueda\" (input)=\"filter($event.target)\"></ion-input>\r\n    </ion-item>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      <div style=\"margin-top: 20px;--background: #E6E7E7; color:#59595C; border: solid #4C7176 1px;\">\r\n\r\n\r\n        <ion-item style=\"--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;\"\r\n          *ngFor=\"let modelo of modelos\">\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col style=\"text-align: center;\">\r\n                <strong style=\"color: #4C7176;\"> {{modelo.modelo}} </strong>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"4\" style=\"text-align: right;\">\r\n                <ion-button (click)=\"restar(modelo)\"\r\n                  style=\"--border-radius: 25px;--padding: 0 0px; --background: #59595C\">-\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size-xs=\"4\" style=\"text-align: center;\">\r\n                <h1 style=\"--border-radius: 25px;--padding: 0 25px; --background: #59595C\">{{modelo.cantidad}}</h1>\r\n              </ion-col>\r\n              <ion-col size-xs=\"4\" style=\"text-align: left;\">\r\n                <ion-button (click)=\"sumar(modelo)\"\r\n                  style=\"--border-radius: 25px;--padding: 0 0px; --background: #4C7176\">+\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n        </ion-item>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-card-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_registerForm_register-form_component_ts.js.map