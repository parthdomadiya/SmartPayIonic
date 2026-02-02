import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AflocPageRoutingModule } from './afloc-routing.module';

import { AflocPage } from './afloc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AflocPageRoutingModule
  ],
  declarations: [AflocPage]
})
export class AflocPageModule {}
