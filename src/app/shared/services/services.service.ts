import { Injectable } from '@angular/core';
import { Annonce } from 'src/app/model/annonces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
    listAnnonces : Annonce[]=[
      {
        id: 1,
        titre: "Bel appartement en centre-ville",
        description: "Appartement lumineux de 3 chambres avec balcon, idéalement situé près des transports en commun.",
        typeBien: "Appartement",
        prix: 250000,
        adresse: "123 Rue de la Liberté, Paris",
        surface: 75,
        image: "https://img.peerspace.com/image/upload/c_crop,g_custom/c_fill,f_auto,w_480/iye11dzw1xyhbtiogchi"
    
    },
    {
      id: 2,
      titre: "Charmante maison avec jardin",
      description: "Maison individuelle avec un grand jardin, 4 chambres, et garage, située dans un quartier calme.",
      typeBien: "Maison",
      prix: 350000,
      adresse: "456 Rue des Fleurs, Lyon",
      surface: 120,
      image: "https://th.bing.com/th/id/OIP.850-vWpJQOks8J-zzigkMgHaFj?rs=1&pid=ImgDetMain"

  },

  
    {
      id: 3,
      titre: "Terrain à bâtir",
      description: "Terrain constructible de 800 m², situé à proximité des commodités.",
      typeBien: "Terrain",
      prix: 150000,
      adresse: "789 Avenue du Général, Nice",
      surface: 800,
      image: "https://th.bing.com/th/id/OIP._dYagA1r46lIg9ZEce0TZAHaFj?rs=1&pid=ImgDetMain"
  },

  
    {
      id: 4,
      titre: "Bureau à louer dans un immeuble moderne",
      description: "Bureau de 50 m² situé au 3ème étage d'un immeuble récent avec ascenseur.",
      typeBien: "Bureau",
      prix: 1200,
      adresse: "101 Boulevard de l'Innovation, Marseille",
      surface: 50,
      image: "https://th.bing.com/th/id/OIP.VC2To-OvPqnOEs33OrC-3AHaE8?rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    titre: "Local commercial à vendre",
    description: "Local de 90 m² idéal pour un magasin ou un café, situé dans une rue passante.",
    typeBien: "Local commercial",
    prix: 300000,
    adresse: "202 Rue du Commerce, Toulouse",
    surface: 90,
    image: "https://th.bing.com/th/id/OIP.hXnNbFOntT0Zg0K59mye9wHaFk?rs=1&pid=ImgDetMain"
},
{
  id: 6,
  titre: "Appartement avec vue sur mer",
  description: "Superbe appartement de 2 chambres avec vue imprenable sur la mer. Idéal pour les vacances ou résidence principale.",
  typeBien: "Appartement",
  prix: 420000,
  adresse: "15 Avenue de la Plage, Cannes",
  surface: 85,
  image: "https://th.bing.com/th/id/OIP.zC_1OQNfpL5BMUxn6cVbbwHaFR?rs=1&pid=ImgDetMain"
}


  
  
  

]
  
}
