import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVentaPage } from './postVenta.page';

const routes: Routes = [
  {
    path: '',
    component: PostVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVentaPageRoutingModule { }
