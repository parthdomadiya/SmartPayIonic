import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresidPage } from './presid.page';

const routes: Routes = [
  {
    path: '',
    component: PresidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresidPageRoutingModule {}
