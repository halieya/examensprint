import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vol } from '../model/vol.model';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [
  ]
})
export class UpdateAvionComponent implements OnInit {

  currentAvion = new Avion();
  vols! : Vol[];
  updatedVolId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private avionService: AvionService) { }

  ngOnInit(): void {
    this.avionService.listeVols().
    subscribe(vols => {this.vols = vols._embedded.vols;
    console.log(vols);
    });


    this.avionService.consulterAvion(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentAvion = prod; 
      this.updatedVolId =   this.currentAvion.vol.idVol;
    
    } ) ;
    }
    

  

  updateAvion() {
    this.currentAvion.vol = this.vols.find(vol => vol.idVol == this.updatedVolId)!;
         this.avionService.updateAvion(this.currentAvion).subscribe(prod => {
      this.router.navigate(['avions']); }
      );
  }

}