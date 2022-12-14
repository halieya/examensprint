import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Vol } from '../model/vol.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-add-avion',
  templateUrl: './add-avion.component.html'
})
export class AddAvionComponent implements OnInit{
 
  newAvion = new Avion();
 
  vols!: Vol[];
  newIdVol! : number;
  newVol! : Vol;
   message!: string;
  constructor(private avionService: AvionService,private router : Router){}
  


    ngOnInit(): void {
      this.avionService.listeVols().
      subscribe(vols => {this.vols = vols._embedded.vols;
      console.log(vols);
      });    }

    addAvion(){
      this.newAvion.vol = this.vols.find(vol => vol.idVol == this.newIdVol)!;

      this.avionService.ajouterAvion(this.newAvion)
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['avions']);
      });
      }
      
}
