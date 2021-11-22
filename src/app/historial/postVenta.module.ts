import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostVentaPageRoutingModule } from './postVenta-routing.module';

import { PostVentaPage } from './postVenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostVentaPageRoutingModule
  ],
  declarations: [PostVentaPage]
})
export class PostVentaPageModule { }
