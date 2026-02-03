import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThisPageRoutingModule } from './this-routing.module';

import { ThisPage } from './this.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThisPageRoutingModule
  ],
  declarations: [ThisPage]
})
export class ThisPageModule {}
