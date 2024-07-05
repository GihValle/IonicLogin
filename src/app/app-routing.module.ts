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
    path: 'recover',
    loadChildren: () => import('./screen/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'recover-code',
    loadChildren: () => import('./screen/recover-code/recover-code.module').then( m => m.RecoverCodePageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./screen/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'initial',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./screen/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./screen/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./screen/favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screen/cart/cart.module').then( m => m.CartPageModule)
  },  {
    path: 'principal',
    loadChildren: () => import('./screen/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./screen/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'subcategorie',
    loadChildren: () => import('./screen/subcategorie/subcategorie.module').then( m => m.SubcategoriePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
