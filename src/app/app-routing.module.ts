import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {path: 'cadastro', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)},
  {path: 'perfil', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'perfil/curriculo', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
