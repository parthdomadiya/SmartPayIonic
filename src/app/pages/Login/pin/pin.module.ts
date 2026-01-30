import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinPageRoutingModule } from './pin-routing.module';

import { PinPage } from './pin.page';
import { CodeInputModule } from 'angular-code-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinPageRoutingModule,
    CodeInputModule
  ],
  declarations: [PinPage]
})
export class PinPageModule {}
