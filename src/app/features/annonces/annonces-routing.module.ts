import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeAnnoncesComponent } from './home-annonces/home-annonces.component';
import { CardAnnonceComponent } from './card-annonce/card-annonce.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';

const routes: Routes = [
  
  {path:'',component : HomeAnnoncesComponent,
    children:[
    {path:'', component: ListAnnoncesComponent},
    {path:':id',component:CardAnnonceComponent}
    
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnoncesRoutingModule { }
