import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuccessPage } from './tsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: TsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuccessPageRoutingModule {}
