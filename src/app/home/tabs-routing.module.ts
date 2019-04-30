import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'home',
      component: HomePage,
      children:
        [
          {
            path: 'mtk',
            children:
              [
                {
                  path: '',
                  loadChildren: '../mtk/mtk.module#MtkPageModule'
                }
              ]
          },
          {
            path: 'ipa',
            children:
              [
                {
                  path: '',
                  loadChildren: '../ipa/ipa.module#IpaPageModule'
                }
              ]
          },
          {
            path: 'theinfo',
            children:
              [
                {
                  path: '',
                  loadChildren: '../theinfo/theinfo.module#TheinfoPageModule'
                }
              ]
          },
          {
            path: '',
            redirectTo: '/home/mtk',
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: '/home/mtk',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports:
      [
        RouterModule.forChild(routes)
      ],
    exports:
      [
        RouterModule
      ]
  })
  
  export class TabsPageRoutingModule {}