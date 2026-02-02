import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmoneyPageRoutingModule } from './smoney-routing.module';

import { SmoneyPage } from './smoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmoneyPageRoutingModule
  ],
  declarations: [SmoneyPage]
})
export class SmoneyPageModule {}
