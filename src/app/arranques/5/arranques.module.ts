import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArranquesPageRoutingModule } from './arranques-routing.module';

import { ArranquesPage } from './arranques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArranquesPageRoutingModule
  ],
  declarations: [ArranquesPage]
})
export class ArranquesPageModule { }
