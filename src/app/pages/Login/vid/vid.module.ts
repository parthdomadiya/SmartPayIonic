import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidPageRoutingModule } from './vid-routing.module';

import { VidPage } from './vid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidPageRoutingModule
  ],
  declarations: [VidPage]
})
export class VidPageModule {}
