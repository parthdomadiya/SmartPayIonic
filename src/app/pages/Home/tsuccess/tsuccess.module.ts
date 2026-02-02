import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuccessPageRoutingModule } from './tsuccess-routing.module';

import { TsuccessPage } from './tsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuccessPageRoutingModule
  ],
  declarations: [TsuccessPage]
})
export class TsuccessPageModule {}
