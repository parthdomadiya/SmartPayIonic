import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NcardPageRoutingModule } from './ncard-routing.module';

import { NcardPage } from './ncard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NcardPageRoutingModule
  ],
  declarations: [NcardPage]
})
export class NcardPageModule {}
