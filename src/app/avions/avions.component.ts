import { Component, OnInit } from "@angular/core";
import { Avion } from '../model/avion.model';
import { AuthService } from "../services/auth.service";
import { AvionService } from '../services/avion.service';

@Component(
  {
    selector: 'app-avions',
    templateUrl: './avions.component.html'
  })

export class AvionsComponent implements OnInit {
  avions!: Avion[];
  constructor(private avionService: AvionService,
    public authService: AuthService) { 
    //this.avions = this.avionService.listeAvion();
}

  ngOnInit(): void {
   
     this.chargerAvions(); 
  }
chargerAvions(){
  this.avionService.listeAvion().subscribe(prods => {
    console.log(prods);
    this.avions = prods;
    }); 
}
  supprimerAvion(p: Avion) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.avionService.supprimerAvion(p.idAvion).subscribe(() => {
        console.log("avion supprimé");
        this.chargerAvions();
      });
  }
}