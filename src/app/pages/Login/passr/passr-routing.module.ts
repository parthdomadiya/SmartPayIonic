import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassrPage } from './passr.page';

const routes: Routes = [
  {
    path: '',
    component: PassrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassrPageRoutingModule {}
