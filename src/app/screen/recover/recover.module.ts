import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPageRoutingModule } from './recover-routing.module';

import { RecoverPage } from './recover.page';
import { SharedModule } from 'src/app/home/components/shared.moduel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPageRoutingModule,
    SharedModule
  ],
  declarations: [RecoverPage]
})
export class RecoverPageModule {}
