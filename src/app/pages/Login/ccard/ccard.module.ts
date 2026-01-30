import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcardPageRoutingModule } from './ccard-routing.module';

import { CcardPage } from './ccard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcardPageRoutingModule
  ],
  declarations: [CcardPage]
})
export class CcardPageModule {}
