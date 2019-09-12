import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs-home',
    loadChildren: () => import('./tabs-home/tabs/tabs.module').then(m => m.TabsPageHomeModule)
  },
  // {
  //   path: 'tabs-reading',
  //   loadChildren: () => import('./tabs-reading/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'read/:verse', loadChildren: './read/read.module#ReadPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
