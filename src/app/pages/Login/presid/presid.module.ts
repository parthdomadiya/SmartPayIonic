import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresidPageRoutingModule } from './presid-routing.module';

import { PresidPage } from './presid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresidPageRoutingModule
  ],
  declarations: [PresidPage]
})
export class PresidPageModule {}
