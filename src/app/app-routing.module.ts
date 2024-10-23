import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './layouts/notfound/notfound.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  { path: 'list', loadChildren: () => import('./features/annonces/annonces.module').then(m => m.AnnoncesModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NotfoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
