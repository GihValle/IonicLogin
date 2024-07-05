import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverCodePage } from './recover-code.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverCodePageRoutingModule {}
