(self["webpackChunkKaeser_Ventas"] = self["webpackChunkKaeser_Ventas"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 1020:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 2713);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
        children: [
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_1_arranques_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/1/arranques.module */ 7323)).then(m => m.ArranquesPageModule)
            },
            {
                path: 'register',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_registerForm_register-form_component_ts"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../register/register.module */ 2474)).then(m => m.RegisterPageModule)
            },
            {
                path: 'cotizacion',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cotizacion_cotizacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cotizacion/cotizacion.module */ 9421)).then(m => m.CotizacionPageModule)
            },
            {
                path: 'productos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_registerForm_register-form_component_ts"), __webpack_require__.e("src_app_cotizacion_productos_productos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cotizacion/productos/productos.module */ 5708)).then(m => m.ProductosPageModule)
            },
            {
                path: 'enviar',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cotizacion_enviar_enviar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cotizacion/enviar/enviar.module */ 5114)).then(m => m.EnviarPageModule)
            },
            {
                path: 'postVenta',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_postVenta_postVenta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../postVenta/postVenta.module */ 7838)).then(m => m.PostVentaPageModule)
            },
            {
                path: 'postVentaView',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_addSaleOrder_add-sale_component_ts"), __webpack_require__.e("src_app_postVenta_postVentaView_postVentaView_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../postVenta/postVentaView/postVentaView.module */ 7159)).then(m => m.postVentaViewModule)
            },
            {
                path: 'postVentaEdit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_postVenta_postVentaEdit_cotizacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../postVenta/postVentaEdit/cotizacion.module */ 1776)).then(m => m.CotizacionPageModule)
            },
            {
                path: 'postVentaProduct',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_registerForm_register-form_component_ts"), __webpack_require__.e("src_app_postVenta_postVentaProductos_productos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../postVenta/postVentaProductos/productos.module */ 6213)).then(m => m.ProductosPageModule)
            },
            {
                path: 'historialMenu',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_historial_menu_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../historial/menu/register.module */ 2788)).then(m => m.RegisterPageModule)
            },
            {
                path: 'solicitudes',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_historial_postVenta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../historial/postVenta.module */ 730)).then(m => m.PostVentaPageModule)
            },
            {
                path: 'solicitudesView',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_addSaleOrder_add-sale_component_ts"), __webpack_require__.e("src_app_historial_postVentaView_postVentaView_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../historial/postVentaView/postVentaView.module */ 3832)).then(m => m.postVentaViewModule)
            },
            {
                path: 'solicitudEdit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_historial_postVentaEdit_cotizacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../historial/postVentaEdit/cotizacion.module */ 8221)).then(m => m.CotizacionPageModule)
            },
            {
                path: 'solicitudProducto',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_registerForm_register-form_component_ts"), __webpack_require__.e("src_app_historial_postVentaProductos_productos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../historial/postVentaProductos/productos.module */ 5741)).then(m => m.ProductosPageModule)
            },
            {
                path: 'cotizacionesAll',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_historial_cotizaciones_postVenta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../historial/cotizaciones/postVenta.module */ 6231)).then(m => m.PostVentaPageModule)
            },
            {
                path: 'ada',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ada_1_ada_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../ada/1/ada.module */ 1677)).then(m => m.AdaPageModule)
            },
            {
                path: 'ada-first',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ada_2_ada_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../ada/2/ada.module */ 1812)).then(m => m.AdaPageModule)
            },
            {
                path: 'ada-second',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ada_3_ada_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../ada/3/ada.module */ 4268)).then(m => m.AdaPageModule)
            },
            {
                path: 'arranques',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_arranques_1_arranques_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../arranques/1/arranques.module */ 8213)).then(m => m.ArranquesPageModule)
            },
            {
                path: 'arranques-first',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_arranques_1_arranques_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../arranques/1/arranques.module */ 8213)).then(m => m.ArranquesPageModule)
            },
            {
                path: 'arranques-second',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_arranques_1_arranques_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../arranques/1/arranques.module */ 8213)).then(m => m.ArranquesPageModule)
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 7056:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 1020);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 2713);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 2713:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 1755);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 9289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let MenuPage = class MenuPage {
    constructor() {
        this.appPages = [
            { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 9289:
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1755:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-split-pane contentId=\"content\" when=\"false\">\r\n  <ion-menu contentId=\"content\" side=\"end\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons>\r\n          <ion-menu-toggle style=\"padding-left: 10px;\">\r\n            <ion-icon name=\"arrow-back\" size=\"large\"></ion-icon>\r\n            <ion-button\r\n              style=\"--border-radius: 25px;--padding: 0 25px; --background: #4C7176; --color: white; height: 25px;vertical-align: super;font-size: 15px;\">\r\n              MENU\r\n            </ion-button>\r\n          </ion-menu-toggle>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list id=\"inbox-list\">\r\n\r\n\r\n\r\n        <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of appPages; let i = index\">\r\n          <ion-item [routerLink]=\"[p.url]\" lines=\"full\" detail=\"false\" routerLinkActive=\"selected\">\r\n            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n            <ion-label>{{ p.title }}</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-split-pane>");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map