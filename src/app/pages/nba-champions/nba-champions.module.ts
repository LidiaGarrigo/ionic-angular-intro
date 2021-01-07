import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NbaChampionsPageRoutingModule } from './nba-champions-routing.module';

import { NbaChampionsPage } from './nba-champions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbaChampionsPageRoutingModule
  ],
  declarations: [NbaChampionsPage]
})
export class NbaChampionsPageModule {}
