(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["default-src_app_modals_addSaleOrder_addSaleOrder_component_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 2604);




let ServicesService = class ServicesService {
    constructor(storage, toastController) {
        this.storage = storage;
        this.toastController = toastController;
        //URL = "https://godevsol.tech/kaeserVentas/api/req/";
        this.URL = "https://localhost/kaeserVentas/api/req/";
    }
    //DB
    getDBItem(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.create();
            var item = yield this.storage.get(name);
            if (item == null)
                return [];
            return item;
        });
    }
    setDBItem(name, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            yield this.storage.set(name, item);
        });
    }
    cleanDBItem(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            yield this.storage.remove(name);
        });
    }
    //toast
    showToast(msg, header) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                message: msg,
                header: header,
                position: 'top',
                duration: 1500
            });
            toast.present();
        });
    }
    //LOGIN
    login(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParamsWithOutAData(this.URL + "login/login.php", credentials);
        });
    }
    //
    getTiposEquipo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitud(this.URL + "TiposEquipo/read.php");
        });
    }
    getTipoEquipoById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParamsReturnOne(this.URL + "TiposEquipo/readById.php", id);
        });
    }
    //MODELO
    getModelosByTipoEquipo(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Modelo/readByIdTipoEquipo.php", id);
        });
    }
    //COTIZACIONES
    readCotizacionAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitud(this.URL + "Cotizaciones/read.php");
        });
    }
    readCotizacion(state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/readByEstado.php", state);
        });
    }
    saveCotizacion(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/create.php", json);
        });
    }
    modificarCotizacion(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/updateById.php", json);
        });
    }
    //FILE
    loadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudSinJSON(this.URL + "upload.php", file);
        });
    }
    getFile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "verificar.php", id);
        });
    }
    //RESOLVE
    resolverSolicitud(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result.data;
        });
    }
    resolverSolicitudParamsReturnOne(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result.data[0];
        });
    }
    resolverSolicitudParamsWithOutAData(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var result = yield data.json();
            return result;
        });
    }
    resolverSolicitudSinJSON(url, file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: file
            });
            var result = yield data.json();
            return result.data;
        });
    }
};
ServicesService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController }
];
ServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ServicesService);



/***/ }),

/***/ 4842:
/*!***************************************************************!*\
  !*** ./src/app/modals/addSaleOrder/addSaleOrder.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSaleOrderComponent": () => (/* binding */ AddSaleOrderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_addSaleOrder_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addSaleOrder.component.html */ 5254);
/* harmony import */ var _addSaleOrder_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addSaleOrder.component.scss */ 4554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 2604);







let AddSaleOrderComponent = class AddSaleOrderComponent {
    constructor(modalCtrl, storage, api) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.api = api;
        this.tipoEquipo = { tipo: "" };
        this.fileName = '';
        this.modelo = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modelo = yield this.storage.get('postVenta');
            this.fileName = this.modelo.direccionArchivo.split('\\')[2];
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var data = new FormData();
            data.append('file', this.file);
            data.append('id', this.modelo.id);
            var response = yield this.api.loadFile(data);
            this.modelo.direccionArchivo = response;
            yield this.storage.set('postVenta', this.modelo);
            yield this.modalCtrl.dismiss();
        });
    }
    openDialog() {
        document.getElementById('fileid').click();
    }
    loadFile(event) {
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    }
};
AddSaleOrderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
AddSaleOrderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'addSaleOrderComponent-form',
        template: _raw_loader_addSaleOrder_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addSaleOrder_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddSaleOrderComponent);



/***/ }),

/***/ 4554:
/*!*****************************************************************!*\
  !*** ./src/app/modals/addSaleOrder/addSaleOrder.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\nh1 {\n  font-size: larger;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  margin-top: 5px;\n  --border-radius: 25px;\n  --border-width: 2px;\n  --box-shadow: 0px gray;\n  --color: black;\n  --highlight-height: 0;\n  --background: transparent;\n}\n\n.file-input {\n  display: none;\n}\n\nion-icon {\n  font-size: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFNhbGVPcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFGQUFBO0FBQ0o7O0FBRUM7RUFDRSxpQkFBQTtBQUNIOztBQUVDO0VBQ0QsNkNBQUE7RUFDRSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDQTs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJhZGRTYWxlT3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gaDF7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gfVxyXG5cclxuIC5yb3VuZGVkSW5wdXQge1xyXG4tLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4tLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbi0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbi0tYm94LXNoYWRvdzogMHB4IGdyYXk7XHJcbi0tY29sb3I6IGJsYWNrO1xyXG4tLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiA3NXB4O1xyXG59Il19 */");

/***/ }),

/***/ 5254:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/addSaleOrder/addSaleOrder.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-title>{{tipoEquipo.tipo.toUpperCase()}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">X</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      <div style=\"margin-top: 20px;--background: #E6E7E7; color:#59595C; \">\r\n\r\n        <input id='fileid' type='file' hidden (change)=\"loadFile($event)\" />\r\n        <div style=\"text-align: -webkit-center;\">\r\n          <ion-icon name=\"document-outline\"></ion-icon>\r\n        </div>\r\n\r\n\r\n        <ion-item class=\"roundedInput\">\r\n          <ion-input clearInput=\"true\" style=\"margin:-0px; --placeholder-font-weight:5px; height: 10px;\"\r\n            [value]=\"fileName\" type=\"text\" disabled placeholder=\"Ningun archivo cargado\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <div style=\"text-align: -webkit-center;\">\r\n          <ion-button (click)=\"openDialog()\" style=\" --border-radius: 25px;--padding: 0 25px; --background: #4C7176\">\r\n            Cargar Archivo</ion-button>\r\n\r\n          <ion-button (click)=\"loadData()\" style=\" --border-radius: 25px;--padding: 0 25px; --background: #4C7176\">\r\n            Guargar</ion-button>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </ion-card-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_addSaleOrder_addSaleOrder_component_ts.js.map