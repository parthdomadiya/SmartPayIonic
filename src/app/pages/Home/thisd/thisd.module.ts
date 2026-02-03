import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThisdPageRoutingModule } from './thisd-routing.module';

import { ThisdPage } from './thisd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThisdPageRoutingModule
  ],
  declarations: [ThisdPage]
})
export class ThisdPageModule {}
