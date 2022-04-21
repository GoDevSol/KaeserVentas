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
/* harmony import */ var src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services.service */ 7242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);






let PostVentaPage = class PostVentaPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modelos = [];
        this.modelosAll = [];
        this.filterText = 0;
        this.estado = 0;
        this.user = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.api.getDBItem("User");
            this.user = user;
            this.modelos = yield this.api.readCotizacion({ estado: 1 });
            console.log(this.modelos);
            this.modelosAll = yield this.modelos.map(x => {
                x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'));
                x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'));
                return x;
            });
            console.log(this.modelosAll);
        });
    }
    goTo(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('menu/' + ruta);
        });
    }
    goToPostVenta(ruta, modelo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.setOpciones(ruta, modelo, "postVenta");
        });
    }
    ejecutarCotizacion(ruta, modelo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.setOpciones(ruta, modelo, "C4C");
        });
    }
    crearVersion(ruta, modelo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.setOpciones("postVentaEdit", modelo, "version");
        });
    }
    Historial(ruta, modelo, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.setDBItem("idCotizacion", id);
            yield this.setOpciones(ruta, modelo, "historial");
        });
    }
    setOpciones(ruta, modelo, opcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.setDBItem("postVenta", modelo);
            yield this.api.setDBItem("opcion", opcion);
            this.navCtrl.navigateForward('menu/' + ruta);
        });
    }
    filter(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (event.name == "FILTRO") {
                this.filterText = event.value;
            }
            else if (event.name == "DATE") {
                this.fecha = new Date(event.value.replace(/-/g, '\/'));
            }
            this.modelos = this.modelosAll.filter(s => {
                var bandera = true;
                if (this.fecha != undefined) {
                    if (!isNaN(this.fecha.valueOf())) {
                        var mydate = new Date(s.date);
                        var stringDate;
                        mydate = mydate.getFullYear() + '/' + (mydate.getMonth() + 1) + '/' + mydate.getDate();
                        stringDate = this.fecha.getFullYear() + '/' + (this.fecha.getMonth() + 1) + '/' + this.fecha.getDate();
                        if (mydate != stringDate) {
                            bandera = false;
                        }
                    }
                }
                if (this.filterText == "") {
                    return bandera;
                }
                else {
                    return (s.datosForm.oportunidad + s.datosForm.nombreCliente + s.datosForm.idCliente).toUpperCase().includes(this.filterText.toUpperCase());
                }
            });
        });
    }
};
PostVentaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_api_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar\r\n    style=\"--background:none; border-bottom: #4C7176 solid; border-width: 3px;border-top: solid 5px #4C7176;\">\r\n    <ion-img slot=\"start\" style=\"height: 50px; margin: 5px;\" src=\"assets/img/principal/logo.png\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button style=\"color:#4C7176;\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar style=\"--background:none; border: none;\">\r\n    <div>\r\n      <img (click)=\"goTo('register')\" style=\"height: 25px;display: inline; width: 20px; vertical-align: super;\"\r\n        src=\"assets/img/back.png\">\r\n      <ion-button\r\n        style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176;  height: 25px;vertical-align: super;\"\r\n        (click)=\"goTo('register')\">\r\n        POST VENTA</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card style=\"--background:#E6E7E7\">\r\n\r\n    <ion-card-content style=\"text-align: justify;line-height: 1;font-size: 14px;\">\r\n      COTIZACIONES A PROCESAR\r\n    </ion-card-content>\r\n    <hr style=\"background: black;\">\r\n\r\n    <ion-grid>\r\n      <ion-row style=\"padding: 0px;\">\r\n        <ion-col style=\"text-align: left;\">\r\n          <ion-item class=\"roundedInput\">\r\n            <ion-label position=\"floating\">Filtro:</ion-label>\r\n            <ion-input (input)=\"filter($event.target)\" clearInput=\"true\" multiple=\"true\" type=\"text\"\r\n              placeholder=\"Cliente o Equipos\" clearInput=\"true\" name=\"FILTRO\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-item class=\"roundedInput\">\r\n            <ion-input (ionChange)=\"filter($event.target)\" clearInput=\" true\" type=\"date\"\r\n              placeholder=\"Fecha de Solicitud\" clearInput=\"true\" name=\"DATE\">\r\n            </ion-input>\r\n\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <hr style=\"background: black;\">\r\n\r\n    <ion-item style=\"--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;\"\r\n      *ngFor=\"let modelo of modelos\">\r\n\r\n      <ion-grid>\r\n        <ion-row style=\"padding: 0px;\">\r\n          <ion-col style=\"text-align: left;\">\r\n            <strong style=\"color: #4C7176;\"> Cotizaciòn </strong>\r\n            <h6 style=\"margin: 0px;\"> <strong style=\"font-size: large;\">{{modelo.datosForm.oportunidad}} </strong>-\r\n              {{modelo.datosForm.idCliente}}\r\n              -\r\n              solicitud de cotización -\r\n              {{modelo.datosForm.nombreCliente}} - <p style=\"display: inline;\" *ngFor=\"let mod of modelo.datosModelos\">\r\n                - {{mod.modelo}}\r\n              <p>\r\n            </h6>\r\n          </ion-col>\r\n          <ion-col style=\"text-align: center;\" size=\"5\">\r\n\r\n            <ion-button [hidden]=\"user.rol == 2\" (click)=\"goToPostVenta('postVentaView',modelo)\"\r\n              style=\" --border-radius: 25px;--padding: 0 20px; --background: #4C7176; font-size: 12px;\">\r\n              Procesar</ion-button>\r\n\r\n            <ion-button (click)=\"crearVersion('postVentaEdit',modelo)\"\r\n              style=\" --border-radius: 25px;--padding: 0 20px; --background: #4C7176; font-size: 12px;\">\r\n              Nueva Version</ion-button>\r\n\r\n            <ion-button (click)=\"Historial('postVentaHistorial',modelo,modelo.id)\"\r\n              style=\" --border-radius: 25px;--padding: 0 20px; --background: #4C7176; font-size: 12px;\">\r\n              Historial</ion-button>\r\n\r\n            <div [hidden]=\"modelo.estadoC4C == 1\">\r\n              <ion-button [hidden]=\"user.rol == 2 && modelo.estadoC4C != 1\"\r\n                (click)=\"ejecutarCotizacion('postVentaView',modelo)\"\r\n                style=\" --border-radius: 25px;--padding: 0 20px; --background: #4C7176; font-size: 12px;\">\r\n\r\n                Ejecutar en C4C</ion-button>\r\n            </div>\r\n\r\n\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n      </ion-grid>\r\n\r\n    </ion-item>\r\n\r\n\r\n\r\n\r\n    <div style=\"text-align: -webkit-center;\">\r\n      <ion-button (click)=\"goTo('register')\" style=\" --border-radius: 25px;--padding: 0 25px; --background: #4C7176\">\r\n        REGRESAR</ion-button>\r\n\r\n    </div>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer text-center no-border transparent style=\"background:white\">\r\n  <div style=\" text-align: -webkit-center; border-top: 2px solid #4C7176;\">\r\n    <ion-img style=\"width: 225px;\" src=\"assets/img/footer/footer.png\"></ion-img>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_postVenta_postVenta_module_ts.js.map