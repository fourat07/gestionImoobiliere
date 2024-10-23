import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAnnoncesComponent } from './home-annonces/home-annonces.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardAnnonceComponent } from './card-annonce/card-annonce.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnoncesRoutingModule } from './annonces-routing.module';




@NgModule({
  declarations: [
    HomeAnnoncesComponent,
    ListAnnoncesComponent,
    SidebarComponent,
    CardAnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnoncesRoutingModule,
    SharedModule
    
  ]
})
export class AnnoncesModule { }
