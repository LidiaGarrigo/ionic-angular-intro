import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbaChampionsPage } from './nba-champions.page';

const routes: Routes = [
  {
    path: '',
    component: NbaChampionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NbaChampionsPageRoutingModule {}
