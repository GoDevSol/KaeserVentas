import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddSaleComponent } from './add-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  declarations: [AddSaleComponent],
  entryComponents: [AddSaleComponent],
  exports: [AddSaleComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AddSaleComponentModule { }
