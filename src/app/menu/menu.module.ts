import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'login', loadChildren: '../auth/login/login.module#LoginPageModule' },
      { path: 'add', loadChildren: '../admin/add/add.module#AddPageModule' },      
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'details/:id', loadChildren: '../details/details.module#DetailsPageModule' },
      { path: 'details/:id/:filter', loadChildren: '../details/details.module#DetailsPageModule' },
      { path: 'logout', loadChildren: '../auth/logout/logout.module#LogoutPageModule' },
      { path: 'edit/:id', loadChildren: '../admin/edit/edit.module#EditPageModule' }
    ]
  }, {
    path: '',
    redirectTo: 'menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
