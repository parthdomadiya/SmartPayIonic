import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vid1Page } from './vid1.page';

const routes: Routes = [
  {
    path: '',
    component: Vid1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vid1PageRoutingModule {}
