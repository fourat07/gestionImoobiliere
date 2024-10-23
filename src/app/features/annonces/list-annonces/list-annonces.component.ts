import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/model/annonces';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
listAnnonce:Annonce[];

  constructor(private data: ServicesService){

  }
  ngOnInit(): void {
      this.listAnnonce=this.data.listAnnonces;
  }

}
