import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriePage } from './subcategorie.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriePageRoutingModule {}
