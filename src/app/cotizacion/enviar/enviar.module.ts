import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarPageRoutingModule } from './enviar-routing.module';

import { EnviarPage } from './enviar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnviarPageRoutingModule
  ],
  declarations: [EnviarPage]
})
export class EnviarPageModule { }
