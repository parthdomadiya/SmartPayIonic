import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsearchPage } from './psearch.page';

const routes: Routes = [
  {
    path: '',
    component: PsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsearchPageRoutingModule {}
