import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailrecipePage } from './detailrecipe.page';

const routes: Routes = [
  {
    path: '',
    component: DetailrecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailrecipePageRoutingModule {}
