import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoriePageRoutingModule } from './subcategorie-routing.module';

import { SubcategoriePage } from './subcategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoriePageRoutingModule
  ],
  declarations: [SubcategoriePage]
})
export class SubcategoriePageModule {}
