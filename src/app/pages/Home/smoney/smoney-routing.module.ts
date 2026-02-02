import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmoneyPage } from './smoney.page';

const routes: Routes = [
  {
    path: '',
    component: SmoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmoneyPageRoutingModule {}
