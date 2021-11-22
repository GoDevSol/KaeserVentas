import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { postVentaView } from './postVentaView.page';

const routes: Routes = [
  {
    path: '',
    component: postVentaView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class postVentaViewRoutingModule { }
