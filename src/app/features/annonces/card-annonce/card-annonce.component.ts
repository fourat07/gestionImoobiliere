import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/model/annonces';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-card-annonce',
  templateUrl: './card-annonce.component.html',
  styleUrls: ['./card-annonce.component.css']
})
export class CardAnnonceComponent {
  annonce: Annonce | undefined;
  annonceId:any;
  constructor(private activatedRoute: ActivatedRoute, private data:ServicesService) {
  }
  ngOnInit() {
  this.activatedRoute.params.subscribe(
      (params)=>{
        this.annonceId=this.activatedRoute.snapshot.params['id'];
      })
    this.annonce=this.data.listAnnonces.find((a)=>a.id==this.annonceId);
  }

}
