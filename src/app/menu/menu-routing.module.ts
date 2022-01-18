import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'profileAll',
        loadChildren: () => import('../profile/2/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/1/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'cotizacion',
        loadChildren: () => import('../cotizacion/cotizacion.module').then(m => m.CotizacionPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../cotizacion/productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'enviar',
        loadChildren: () => import('../cotizacion/enviar/enviar.module').then(m => m.EnviarPageModule)
      },
      {
        path: 'postVenta',
        loadChildren: () => import('../postVenta/postVenta.module').then(m => m.PostVentaPageModule)
      },
      {
        path: 'postVentaView',
        loadChildren: () => import('../postVenta/postVentaView/postVentaView.module').then(m => m.postVentaViewModule)
      },
      {
        path: 'postVentaEdit',
        loadChildren: () => import('../postVenta/postVentaEdit/cotizacion.module').then(m => m.CotizacionPageModule)
      },
      {
        path: 'postVentaProduct',
        loadChildren: () => import('../postVenta/postVentaProductos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'historialMenu',
        loadChildren: () => import('../historial/menu/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'solicitudes',
        loadChildren: () => import('../historial/postVenta.module').then(m => m.PostVentaPageModule)
      },
      {
        path: 'solicitudesView',
        loadChildren: () => import('../historial/postVentaView/postVentaView.module').then(m => m.postVentaViewModule)
      },
      {
        path: 'solicitudEdit',
        loadChildren: () => import('../historial/postVentaEdit/cotizacion.module').then(m => m.CotizacionPageModule)
      },
      {
        path: 'solicitudProducto',
        loadChildren: () => import('../historial/postVentaProductos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'cotizacionesAll',
        loadChildren: () => import('../historial/cotizaciones/postVenta.module').then(m => m.PostVentaPageModule)
      },
      {
        path: 'ada',
        loadChildren: () => import('../ada/1/ada.module').then(m => m.AdaPageModule)
      },
      {
        path: 'ada-first',
        loadChildren: () => import('../ada/2/ada.module').then(m => m.AdaPageModule)
      },
      {
        path: 'ada-second',
        loadChildren: () => import('../ada/3/ada.module').then(m => m.AdaPageModule)
      },
      {
        path: 'arranques',
        loadChildren: () => import('../arranques/1/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'arranques-first',
        loadChildren: () => import('../arranques/1/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'arranques-second',
        loadChildren: () => import('../arranques/1/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'ejecutado-view',
        loadChildren: () => import('../historial/cotizaciones/postVentaView/postVentaView.module').then(m => m.postVentaViewModule)

      }





    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
