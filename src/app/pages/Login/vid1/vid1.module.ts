import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vid1PageRoutingModule } from './vid1-routing.module';

import { Vid1Page } from './vid1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vid1PageRoutingModule
  ],
  declarations: [Vid1Page]
})
export class Vid1PageModule {}
