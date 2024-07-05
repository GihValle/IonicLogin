import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverCodePageRoutingModule } from './recover-code-routing.module';

import { RecoverCodePage } from './recover-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverCodePageRoutingModule
  ],
  declarations: [RecoverCodePage]
})
export class RecoverCodePageModule {}
