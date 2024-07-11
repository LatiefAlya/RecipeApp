import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailrecipePageRoutingModule } from './detailrecipe-routing.module';

import { DetailrecipePage } from './detailrecipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailrecipePageRoutingModule
  ],
  declarations: [DetailrecipePage]
})
export class DetailrecipePageModule {}
