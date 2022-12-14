import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: [
    
  ]
})
export class RechercheParNomComponent implements OnInit {
  nomAvion! : string;
  avions!: Avion[];
  allAvions!: Avion[];
  searchTerm!: string;
  
  constructor(private avionService : AvionService) { }

  ngOnInit(): void {
    this.avionService.listeAvion().subscribe(prods => {
      console.log(prods);
      this.allAvions = prods;
      });
      
  }
  rechercherProds(){
    this.avionService.rechercherParNom(this.nomAvion).
    subscribe(prods => {
      console.log(prods);
      this.avions=prods;});
  }

  onKeyUp(filterText : string){
    this.avions = this.allAvions.filter(item =>
    item.nomAvion.toLowerCase().includes(filterText));
    }
}
