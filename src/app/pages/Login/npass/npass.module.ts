import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NpassPageRoutingModule } from './npass-routing.module';

import { NpassPage } from './npass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NpassPageRoutingModule
  ],
  declarations: [NpassPage]
})
export class NpassPageModule {}
