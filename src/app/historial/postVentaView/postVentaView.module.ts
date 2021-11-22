import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { postVentaViewRoutingModule } from './postVentaView-routing.module';

import { postVentaView } from './postVentaView.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    postVentaViewRoutingModule
  ],
  declarations: [postVentaView]
})
export class postVentaViewModule { }
