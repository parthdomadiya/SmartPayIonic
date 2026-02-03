import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThisPage } from './this.page';

const routes: Routes = [
  {
    path: '',
    component: ThisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThisPageRoutingModule {}
