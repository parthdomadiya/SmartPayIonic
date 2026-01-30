import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassrPageRoutingModule } from './passr-routing.module';

import { PassrPage } from './passr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassrPageRoutingModule
  ],
  declarations: [PassrPage]
})
export class PassrPageModule {}
