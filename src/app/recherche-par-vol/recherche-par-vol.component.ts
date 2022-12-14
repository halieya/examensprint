import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Vol } from '../model/vol.model';
import { AvionService } from '../services/avion.service';
@Component({
  selector: 'app-recherche-par-vol',
  templateUrl: './recherche-par-vol.component.html',
  styleUrls: [

  ]
})
export class RechercheParVolComponent implements OnInit {
IdVol!:number;

avions! :Avion[];
  vols!: Vol[];
constructor(private avionService : AvionService){

}

  ngOnInit(): void {
    this.avionService.listeVols().
    subscribe(vols => {this.vols= vols._embedded.vols;
    console.log(vols);
    });
    
}
onChange(){
  this.avionService.rechercherParVol(this.IdVol).
  subscribe(p =>{this.avions=p});
}


}
