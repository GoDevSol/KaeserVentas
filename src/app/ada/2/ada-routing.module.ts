import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaPage } from './ada.page';

const routes: Routes = [
  {
    path: '',
    component: AdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaPageRoutingModule { }
