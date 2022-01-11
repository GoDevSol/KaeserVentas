(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_profile_1_arranques_module_ts"],{

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

/***/ 1687:
/*!*******************************************************!*\
  !*** ./src/app/profile/1/arranques-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArranquesPageRoutingModule": () => (/* binding */ ArranquesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _arranques_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arranques.page */ 7660);




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

/***/ 7323:
/*!***********************************************!*\
  !*** ./src/app/profile/1/arranques.module.ts ***!
  \***********************************************/
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
/* harmony import */ var _arranques_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arranques-routing.module */ 1687);
/* harmony import */ var _arranques_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arranques.page */ 7660);







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

/***/ 7660:
/*!*********************************************!*\
  !*** ./src/app/profile/1/arranques.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArranquesPage": () => (/* binding */ ArranquesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_arranques_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./arranques.page.html */ 8071);
/* harmony import */ var _arranques_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arranques.page.scss */ 8226);
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);







let ArranquesPage = class ArranquesPage {
    constructor(formBuilder, navCtrl, api) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.api = api;
        this.formUser = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            puesto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]))
        });
        this.formPassword = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            passwordOld: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]))
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.datosForm = yield this.api.getDBItem("User");
            this.formUser.controls.user.setValue(this.datosForm.user);
            this.formUser.controls.nombres.setValue(this.datosForm.nombres);
            this.formUser.controls.correo.setValue(this.datosForm.correo);
            this.formUser.controls.pais.setValue(this.datosForm.pais);
            this.formUser.controls.puesto.setValue(this.datosForm.puesto);
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
    modificar(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield this.api.modificarUsuario(this.formUser.value);
            this.datosForm.correo = data.correo;
            this.datosForm.nombres = data.nombres;
            this.datosForm.pais = data.pais;
            this.datosForm.puesto = data.puesto;
            yield this.api.setDBItem("User", this.datosForm);
            this.api.showToast("Se ha modificado la informacion exitosamente.", "Datos Usuario");
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    contrasena(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var data = yield this.api.updatePassword(this.formPassword.value);
            try {
                if (data.status == true) {
                    this.api.showToast("Se ha modificado la contraseña exitosamente.", "Datos Usuario");
                    this.navCtrl.navigateBack('menu/' + ruta);
                }
                else {
                    this.api.showToast("No se ha podido actualizar la contraseña.", "Error");
                }
            }
            catch (error) {
                this.api.showToast("No se ha podido actualizar la contraseña.", "Error");
            }
        });
    }
};
ArranquesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
];
ArranquesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'arranques',
        template: _raw_loader_arranques_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_arranques_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArranquesPage);



/***/ }),

/***/ 8226:
/*!***********************************************!*\
  !*** ./src/app/profile/1/arranques.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/assets/img/login/background.png\") no-repeat center center / cover;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --background: #E6E7E7;\n  margin-top: 5px;\n  padding: 0px 15px;\n  font-size: 14px;\n  --border-radius: 15px;\n  --border-width: 1px;\n  --box-shadow: 5px white;\n  --color: black;\n  --highlight-height: 0;\n}\n\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.rounded {\n  border-color: #4C7176;\n  border-style: solid;\n  width: 90%;\n  margin-top: 5px;\n  border-radius: 25px;\n  padding: 10px;\n  border-width: 3px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.rounded-text {\n  border-style: solid;\n  width: 95%;\n  margin-top: 5px;\n  border-radius: 10px;\n  background-color: #a3a3a3;\n  padding: 10px;\n  border-width: 1px;\n  box-shadow: 0px gray;\n  color: black;\n}\n\n.widhte {\n  width: 95%;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #4C7176 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmFucXVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFLRztFQUVDLDZDQUFBO0FBSEo7O0FBTUU7RUFDRSw4Q0FBQTtBQUhKOztBQU1FO0VBQ0UsNkNBQUE7QUFISjs7QUFNRTtFQUNFLDhDQUFBO0FBSEo7O0FBTUU7RUFDRixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUhBOztBQU1BO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFKQTs7QUFPQTtFQUVBLFVBQUE7QUFMQTs7QUFXQTtFQUNFLHlCQUFBO0FBUkYiLCJmaWxlIjoiYXJyYW5xdWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW4vYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggd2hpdGU7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcblxyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gIH1cclxuXHJcbiAgLnJvdW5kZWQge1xyXG5ib3JkZXItY29sb3I6ICM0QzcxNzY7XHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbndpZHRoOiA5MCU7XHJcbm1hcmdpbi10b3A6IDVweDtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxucGFkZGluZzogMTBweDtcclxuYm9yZGVyLXdpZHRoOiAzcHg7XHJcbmJveC1zaGFkb3c6IDBweCBncmF5O1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuICBcclxuLnJvdW5kZWQtdGV4dCB7XHJcblxyXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG53aWR0aDogOTUlO1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcclxucGFkZGluZzogMTBweDtcclxuYm9yZGVyLXdpZHRoOiAxcHg7XHJcbmJveC1zaGFkb3c6IDBweCBncmF5O1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi53aWRodGUge1xyXG5cclxud2lkdGg6IDk1JTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgPiBpb24tbGFiZWx7XHJcbiAgY29sb3I6ICAjNEM3MTc2ICAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 8071:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/1/arranques.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('register')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('register')\">\r\n        Modificar Perfil</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n\r\n    </ion-card-content>\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <div class=\"rounded\">\r\n        DATOS DE USUARIO\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"formUser\">\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">User (Codigo Empleado):</ion-label>\r\n              <ion-input formControlName=\"user\" clearInput=\"true\" type=\"text\" placeholder=\"User (Codigo Empleado):\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label class=\"colorGreen\" position=\"floating\">Nombre Y Apellido:</ion-label>\r\n              <ion-input formControlName=\"nombres\" clearInput=\"true\" type=\"text\" placeholder=\"Nombre Y Apellido\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label class=\"colorGreen\" position=\"floating\">Correo Electronico:</ion-label>\r\n              <ion-input formControlName=\"correo\" clearInput=\"true\" type=\"text\" placeholder=\"Correo Electronico\"\r\n                clearInput=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">Pais:</ion-label>\r\n              <ion-select formControlName=\"pais\" clearInput=\"true\">\r\n                <ion-select-option value=\"GTQ\">Guatemala</ion-select-option>\r\n                <ion-select-option value=\"CRI\">Costa Rica</ion-select-option>\r\n                <ion-select-option value=\"SLV\">El Salvador</ion-select-option>\r\n                <ion-select-option value=\"HNL\">Honduras</ion-select-option>\r\n                <ion-select-option value=\"PAN\">Panama</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">Puesto:</ion-label>\r\n              <ion-input formControlName=\"puesto\" clearInput=\"true\" type=\"text\" placeholder=\"Puesto\" clearInput=\"true\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </form>\r\n\r\n\r\n\r\n\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n\r\n      <ion-button (click)=\"modificar('register')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">MODIFICAR DATOS</ion-button>\r\n    </div>\r\n\r\n    <div style=\"text-align: -webkit-center; margin-top: 25px;\">\r\n      <div class=\"rounded\">\r\n        MODIFICAR CONTRASEÑA\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <form [formGroup]=\"formPassword\">\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label position=\"floating\">Contraseña Actual:</ion-label>\r\n              <ion-input formControlName=\"passwordOld\" clearInput=\"true\" type=\"password\"\r\n                placeholder=\"Contraseña Actual\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label class=\"colorGreen\" position=\"floating\">Contraseña Nueva:</ion-label>\r\n              <ion-input formControlName=\"password\" clearInput=\"true\" type=\"password\" placeholder=\"Contraseña Nueva\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item class=\"roundedInput\">\r\n              <ion-label class=\"colorGreen\" position=\"floating\">Confirmacion de Contraseña:</ion-label>\r\n              <ion-input formControlName=\"passwordConfirm\" clearInput=\"true\" type=\"password\"\r\n                placeholder=\"Confirmacion de Contraseña\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n\r\n      <ion-button (click)=\"contrasena('register')\" type=\"submit\"\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176\">Actualizar contraseña</ion-button>\r\n    </div>\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_1_arranques_module_ts.js.map