import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/model/annonces';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  listAnnonces : Array<Annonce>;
constructor(private data:ServicesService){}
ngOnInit(): void {
this.listAnnonces=this.data.listAnnonces}
}
