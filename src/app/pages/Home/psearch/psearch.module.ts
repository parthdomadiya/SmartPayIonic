import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsearchPageRoutingModule } from './psearch-routing.module';

import { PsearchPage } from './psearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsearchPageRoutingModule
  ],
  declarations: [PsearchPage]
})
export class PsearchPageModule {}
