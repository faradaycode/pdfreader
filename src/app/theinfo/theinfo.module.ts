import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TheinfoPage } from './theinfo.page';
import { AppVersion } from '@ionic-native/app-version/ngx';

const routes: Routes = [
  {
    path: '',
    component: TheinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AppVersion
  ],
  declarations: [TheinfoPage]
})
export class TheinfoPageModule {}
