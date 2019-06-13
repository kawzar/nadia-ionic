import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
