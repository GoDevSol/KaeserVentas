import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddSaleOrderComponent } from './addSaleOrder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  declarations: [AddSaleOrderComponent],
  entryComponents: [AddSaleOrderComponent],
  exports: [AddSaleOrderComponent]
})
export class AddSaleOrderComponentModule { }
