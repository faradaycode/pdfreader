import { AppRate } from '@ionic-native/app-rate/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DocviewerPage } from './docviewer.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PinchZoomModule } from 'ngx-pinch-zoom';


const routes: Routes = [
  {
    path: '',
    component: DocviewerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,    
    PinchZoomModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AppRate
  ],
  declarations: [DocviewerPage]
})
export class DocviewerPageModule {}
