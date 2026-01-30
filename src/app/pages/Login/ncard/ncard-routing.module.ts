import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NcardPage } from './ncard.page';

const routes: Routes = [
  {
    path: '',
    component: NcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NcardPageRoutingModule {}
