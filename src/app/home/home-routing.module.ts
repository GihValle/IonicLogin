import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      },
      {
        path: 'favorite',
        loadChildren: () => import('../screen/favorite/favorite.module').then( m => m.FavoritePageModule)
      },
      {
        path: 'principal',
        loadChildren: () => import('../screen/principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../screen/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../screen/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../screen/notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'subcategorie',
        loadChildren: () => import('../screen/subcategorie/subcategorie.module').then( m => m.SubcategoriePageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
