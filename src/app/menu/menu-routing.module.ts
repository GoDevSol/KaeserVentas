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
        path: 'postVentaHistorial',
        loadChildren: () => import('../postVenta/Historial/postVenta.module').then(m => m.PostVentaPageModule)
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
        path: 'checklist',
        loadChildren: () => import('../checklist/1/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'checklist-second',
        loadChildren: () => import('../checklist/2/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'checklist-third',
        loadChildren: () => import('../checklist/3/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'checklist-four',
        loadChildren: () => import('../checklist/4/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'checklist-five',
        loadChildren: () => import('../checklist/5/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'checklist-six',
        loadChildren: () => import('../checklist/6/checklist.module').then(m => m.ChecklistPageModule)
      },

      {
        path: 'arranques',
        loadChildren: () => import('../arranques/1/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'arranques-first',
        loadChildren: () => import('../arranques/2/arranques.module').then(m => m.ArranquesPageModule)
      },
      {
        path: 'arranques-second',
        loadChildren: () => import('../arranques/3/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'arranques-third',
        loadChildren: () => import('../arranques/4/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'arranques-four',
        loadChildren: () => import('../arranques/5/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'arranques-five',
        loadChildren: () => import('../arranques/6/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'arranques-six',
        loadChildren: () => import('../arranques/7/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'arranques-seven',
        loadChildren: () => import('../arranques/8/arranques.module').then(m => m.ArranquesPageModule)

      },
      {
        path: 'ejecutado-view',
        loadChildren: () => import('../historial/cotizaciones/postVentaView/postVentaView.module').then(m => m.postVentaViewModule)

      },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)

      }





    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
