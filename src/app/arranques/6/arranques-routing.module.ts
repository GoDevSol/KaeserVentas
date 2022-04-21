import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArranquesPage } from './arranques.page';

const routes: Routes = [
  {
    path: '',
    component: ArranquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArranquesPageRoutingModule { }
