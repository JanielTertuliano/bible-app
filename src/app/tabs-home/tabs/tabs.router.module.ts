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
        path: 'versoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../versoes/versoes.module').then(m => m.VersoesPageModule)
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