import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcardPage } from './ccard.page';

const routes: Routes = [
  {
    path: '',
    component: CcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcardPageRoutingModule {}
