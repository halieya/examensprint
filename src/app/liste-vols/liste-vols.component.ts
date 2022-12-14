import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: [
  ]
})
export class ListeVolsComponent implements OnInit{
  vols! : Vol[];
  updatedVol:Vol = {"idVol":0,"nomVol":""};
  ajout:boolean=true;
  constructor(private avionService : AvionService) { }
  ngOnInit(): void {
    this.chargerVols();
  }
  chargerVols(){
    this.avionService.listeVols().
      subscribe(vols => {this.vols = vols._embedded.vols;
      console.log(vols);
    });
  }
  updateVol(vol:Vol) {
    this.updatedVol=vol;
    this.ajout=false;  
  }
 volUpdated(vol:Vol){
    console.log("Vol updated event",vol);
    this.avionService.ajouterVol(vol).subscribe( () =>  this.chargerVols());
  }
  supprimerVol(vol : Vol) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
       //  this.volService.supprimerVol(cat.idCat).subscribe(() => {
          console.log("Catégorie supprimée");
          //this.chargerCVols(); }  );
       }
  }
}







