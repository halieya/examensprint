import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Vol } from '../model/vol.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VolWrapper } from '../model/volWrapped.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class AvionService {
  avions!: Avion[]; //un tableau de Avion
  apiURL: string = 'http://localhost:8080/avions/api';
  apiURLVol: string = 'http://localhost:8080/avions/vol';



  vols!: Vol[];


constructor(private http : HttpClient) {
/*
this.vols = [
  {idVol:1, nomVol : "PC"},
  {idVol :2, nomVol:"Imprimante"}
];
*/
this.avions = [
{ idAvion : 1, nomAvion : "PC Asus", prixAvion : 3000.600, dateCreation: new Date("01/14/2011"),
vol :{idVol:1, nomVol : "PC"} },
{ idAvion : 2, nomAvion : "Imprimante Epson", prixAvion : 450, dateCreation : new Date("12/17/2010"),
 vol : {idVol :2, nomVol:"Imprimante"}},
{ idAvion : 3, nomAvion :"Tablette Samsung", prixAvion : 900.123, dateCreation : new Date("02/20/2020"),
vol :{idVol:1, nomVol : "PC"} }
];

}

listeAvion(): Observable<Avion[]>{
  return this.http.get<Avion[]>(this.apiURL);
  }
  ajouterAvion( prod: Avion):Observable<Avion>{
    return this.http.post<Avion>(this.apiURL, prod, httpOptions);
    }
 
  

    supprimerAvion(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterAvion(id: number): Observable<Avion> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Avion>(url);
        }

        trierAvions(){
          this.avions = this.avions.sort((n1,n2) => {
            if (n1.idAvion > n2.idAvion) {
                return 1;
            }
           if (n1.idAvion < n2.idAvion) {
                return -1;
            }
          return 0;
        });
        }
    

        updateAvion(prod :Avion) : Observable<Avion>
        {
        return this.http.put<Avion>(this.apiURL, prod, httpOptions);
        }
        


  listeVols(): Observable<VolWrapper> {
    return this.http.get<VolWrapper>(this.apiURLVol);
  }
  rechercherParVol(idVol: number): Observable<Avion[]> {
    const url = `${this.apiURL}/prodsvol/${idVol}`;
    return this.http.get<Avion[]>(url);
  }
  rechercherParNom(nom: string):Observable< Avion[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Avion[]>(url);
    }
    ajouterVol( vol: Vol):Observable<Vol>{
      return this.http.post<Vol>(this.apiURLVol, vol, httpOptions);
      }
      
}