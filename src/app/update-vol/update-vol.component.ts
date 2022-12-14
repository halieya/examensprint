import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styleUrls: [
    
  ]
})
export class UpdateVolComponent implements OnInit{
  @Input()
  vol! : Vol;
 volUpdated =new EventEmitter<Vol>();


  constructor(){}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateVol ",this.vol);
    }

    saveVol(){
      this.volUpdated.emit(this.vol);
    }
}
