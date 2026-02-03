import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtopupPageRoutingModule } from './mtopup-routing.module';

import { MtopupPage } from './mtopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtopupPageRoutingModule
  ],
  declarations: [MtopupPage]
})
export class MtopupPageModule {}
