import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaPageRoutingModule } from './ada-routing.module';

import { AdaPage } from './ada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdaPageRoutingModule
  ],
  declarations: [AdaPage]
})
export class AdaPageModule { }
