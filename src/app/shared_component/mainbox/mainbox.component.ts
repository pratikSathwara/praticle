import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-mainbox',
  templateUrl: './mainbox.component.html',
  styleUrls: ['./mainbox.component.scss']
})
export class MainboxComponent {
  public carddata:any;
  constructor(private service:CardService){
    this.service.displaydata().subscribe( res =>{
     this.carddata = res
    })
  }
}
