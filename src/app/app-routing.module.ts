import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m. HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./screen/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screen/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./screen/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./screen/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'initial',
    loadChildren: () => import('./screen/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./screen/produto/produto.module').then( m => m.ProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
