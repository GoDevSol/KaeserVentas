import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionPageRoutingModule } from './cotizacion-routing.module';

import { CotizacionPage } from './cotizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CotizacionPageRoutingModule
  ],
  declarations: [CotizacionPage]
})
export class CotizacionPageModule {}
