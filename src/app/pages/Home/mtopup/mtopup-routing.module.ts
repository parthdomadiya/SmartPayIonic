import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtopupPage } from './mtopup.page';

const routes: Routes = [
  {
    path: '',
    component: MtopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtopupPageRoutingModule {}
