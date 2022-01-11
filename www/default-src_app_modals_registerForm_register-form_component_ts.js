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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 2604);




let ServicesService = class ServicesService {
    //URL = "https://localhost/kaeserVentas/api/req/";
    constructor(storage, toastController) {
        this.storage = storage;
        this.toastController = toastController;
        this.URL = "https://godevsol.tech/kaeserVentas/api/req/";
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
    getInfoUser(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "login/validate_token.php", credentials);
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
            return yield this.resolverSolicitudParamsWithOutAData(this.URL + "Cotizaciones/create.php", json);
        });
    }
    modificarCotizacion(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "Cotizaciones/updateById.php", json);
        });
    }
    //USER
    modificarUsuario(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var jwt = yield this.getDBItem("JWT");
            var newJson = Object.assign(Object.assign({}, json), { jwt: jwt });
            return yield this.resolverSolicitudParams(this.URL + "user/updateUser.php", newJson);
        });
    }
    updatePassword(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var jwt = yield this.getDBItem("JWT");
            var newJson = Object.assign(Object.assign({}, json), { jwt: jwt });
            return yield this.resolverSolicitudParamsWithOutAData(this.URL + "user/updateUserPassword.php", newJson);
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
    //REPORTE
    createPDF(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParamsWithOutParse(this.URL + "pdf/pdfCreation.php", json);
        });
    }
    //MAIL
    sendMail(json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.resolverSolicitudParams(this.URL + "email/" + json.url, json);
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
    resolverSolicitudParamsWithOutParse(url, json) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield fetch(url, {
                method: "POST",
                body: JSON.stringify(json)
            });
            var string64 = yield data.text();
            const linkSource = string64;
            //const downloadLink = document.createElement("a");
            //downloadLink.href = linkSource;
            //downloadLink.download = "jenner.pdf";
            //downloadLink.click();
            let pdfWindow = window.open("");
            pdfWindow.document.write("<iframe width='100%' height='100%' src='" +
                string64 + "'></iframe>");
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

;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);






let RegisterFormComponent = class RegisterFormComponent {
    constructor(modalCtrl, api) {
        this.modalCtrl = modalCtrl;
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
            this.modelosAgregados = yield this.api.getDBItem('modelos');
            this.modelosAgregados.forEach(element => {
                if (element.idTipoEquipo == this.id) {
                    this.upsert(this.modelos, element);
                }
            });
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.api.setDBItem("modelos", this.modelosAgregados);
            yield this.modalCtrl.dismiss();
        });
    }
    filter(event) {
        if (event.name == "BUSQUEDA") {
            this.modelos = this.modelosAll.filter(s => s.modelo.includes(event.value));
        }
        if (event.name == "CFM") {
            this.modelos = this.modelosAll.filter(s => s.CFM.includes(event.value));
        }
        if (event.name == "PSI") {
            this.modelos = this.modelosAll.filter(s => s.PSI.includes(event.value));
        }
        if (event.name == "VOLTAJE") {
            this.modelos = this.modelosAll.filter(s => s.VOLTAJE.includes(event.value));
        }
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
            array[i] = element;
        else
            array.push(element);
    }
};
RegisterFormComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
RegisterFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\nh1 {\n  font-size: larger;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  margin-top: 5px;\n  --border-radius: 25px;\n  --border-width: 2px;\n  --box-shadow: 0px gray;\n  --color: black;\n  --highlight-height: 0;\n  --background: transparent;\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-grid {\n  padding: 0px;\n}\n\nion-item {\n  margin: 3px;\n}\n\nion-card-content {\n  padding-top: 3px;\n}\n\n.item-native {\n  min-height: 25px !important;\n  height: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRkFBQTtBQUNKOztBQUVDO0VBQ0UsaUJBQUE7QUFDSDs7QUFFQztFQUNELDZDQUFBO0VBQ0UsZUFBQTtFQUNGLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0E7O0FBSUc7RUFDTSxZQUFBO0FBRFQ7O0FBSUc7RUFDTSxZQUFBO0FBRFQ7O0FBS0c7RUFDTSxXQUFBO0FBRlQ7O0FBS0c7RUFDRSxnQkFBQTtBQUZMOztBQUtHO0VBQ0MsMkJBQUE7RUFDQSx1QkFBQTtBQUZKIiwiZmlsZSI6InJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gaDF7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gfVxyXG5cclxuIC5yb3VuZGVkSW5wdXQge1xyXG4tLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4tLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbi0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbi0tYm94LXNoYWRvdzogMHB4IGdyYXk7XHJcbi0tY29sb3I6IGJsYWNrO1xyXG4tLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxufVxyXG5cclxuIFxyXG4gIFxyXG4gICBpb24tY29se1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHhcclxuICAgfVxyXG4gICAgXHJcbiAgIGlvbi1ncmlke1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHhcclxuICAgfVxyXG5cclxuXHJcbiAgIGlvbi1pdGVte1xyXG4gICAgICAgICBtYXJnaW46IDNweDtcclxuICAgfVxyXG5cclxuICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaXRlbS1uYXRpdmUge1xyXG4gICAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAiXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar\r\n    style=\"--background: rgba(255, 255, 255, 0.85); border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;--min-height: 35px\">\r\n    <ion-title>{{tipoEquipo.tipo.toUpperCase()}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">X</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar\r\n    style=\"--min-height: 35px;--background: rgba(255, 255, 255, 0.85); border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <ion-item class=\"roundedInput\" style=\"width:90%;  --min-height: 16px;\">\r\n        <ion-input class=\"roundedInput\" name=\"BUSQUEDA\" clearInput=\"true\" type=\"text\" placeholder=\"Busqueda\"\r\n          (input)=\"filter($event.target)\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <ion-grid style=\"width:90%;\" *ngIf=\"id == 1\">\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">CFM:</ion-label>\r\n              <ion-input name=\"CFM\" clearInput=\"true\" (input)=\"filter($event.target)\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col style=\"text-align: center;\">\r\n\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">PSI:</ion-label>\r\n              <ion-select name=\"PSI\" clearInput=\"true\" (ionChange)=\"filter($event.target)\">\r\n                <ion-select-option value=\"\">Todos</ion-select-option>\r\n                <ion-select-option value=\"87\">87</ion-select-option>\r\n                <ion-select-option value=\"125\">125</ion-select-option>\r\n                <ion-select-option value=\"130\">130</ion-select-option>\r\n                <ion-select-option value=\"160\">160</ion-select-option>\r\n                <ion-select-option value=\"174\">174</ion-select-option>\r\n                <ion-select-option value=\"217\">217</ion-select-option>\r\n\r\n\r\n              </ion-select>\r\n\r\n\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">VOLTAJE:</ion-label>\r\n              <ion-select name=\"VOLTAJE\" clearInput=\"true\" (ionChange)=\"filter($event.target)\">\r\n                <ion-select-option value=\"\">Todos</ion-select-option>\r\n                <ion-select-option value=\"Trivoltaje (208/240/460 VAC 60HZ)\">Trivoltaje (208/240/460 VAC 60HZ)\r\n                </ion-select-option>\r\n                <ion-select-option value=\" 240 VAC 60HZ\">240 VAC 60HZ</ion-select-option>\r\n                <ion-select-option value=\" 460 VAC 60HZ\">460 VAC 60HZ</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n\r\n\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      <div style=\"margin-top: 20px;--background: #E6E7E7; color:#59595C; border: solid #4C7176 1px;\">\r\n\r\n\r\n        <ion-item style=\"--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;\"\r\n          *ngFor=\"let modelo of modelos\">\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col style=\"text-align: center;\">\r\n                <strong style=\"color: #4C7176; font-size: 20px;\"> {{modelo.modelo}} </strong>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"id == 1\">\r\n              <ion-col style=\" text-align: right;\">\r\n                <strong style=\"color: #4C7176;\"> CFM: </strong>\r\n                <strong> {{modelo.CFM}} </strong>\r\n              </ion-col>\r\n              <ion-col style=\"text-align: center;\">\r\n                <strong style=\"color: #4C7176;\"> PSI: </strong>\r\n                <strong> {{modelo.PSI}} </strong>\r\n              </ion-col>\r\n              <ion-col style=\"text-align: left;\">\r\n                <strong style=\"color: #4C7176;\"> VOLTAJE: </strong>\r\n                <strong> {{modelo.VOLTAJE}} </strong>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size-xs=\"4\" style=\"text-align: right;\">\r\n                <ion-button (click)=\"restar(modelo)\"\r\n                  style=\"--border-radius: 25px;--padding: 0 0px; --background: #59595C;font-size: 15px;\">-\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size-xs=\"4\" style=\"text-align: center;\">\r\n                <h1 style=\"--border-radius: 25px;--padding: 0 25px; --background: #59595C;font-size: 20px;\">\r\n                  {{modelo.cantidad}}</h1>\r\n              </ion-col>\r\n              <ion-col size-xs=\"4\" style=\"text-align: left;\">\r\n                <ion-button (click)=\"sumar(modelo)\"\r\n                  style=\"--border-radius: 25px;--padding: 0 0px; --background: #4C7176;font-size: 15px;\">+\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n        </ion-item>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-card-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_registerForm_register-form_component_ts.js.map