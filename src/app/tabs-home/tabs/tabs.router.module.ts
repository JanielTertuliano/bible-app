import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabs-reading',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../tabs-reading/tabs/tabs.module').then(m => m.TabsPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs-home/tabs-reading/livro',
        pathMatch: 'full'
      },
      {
        path: 'livro',
        redirectTo: '/tabs-home/tabs-reading/livro',
        pathMatch: 'full'
      },
      {
        path: 'capitulos',
        redirectTo: '/tabs-home/tabs-reading/capitulos',
        pathMatch: 'full'
      },
      {
        path: 'versiculos',
        redirectTo: '/tabs-home/tabs-reading/versiculos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-home/tabs-reading/livro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}