import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
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
      }
      ,
      {
        path: 'historialMenu',
        loadChildren: () => import('../historial/menu/register.module').then(m => m.RegisterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
