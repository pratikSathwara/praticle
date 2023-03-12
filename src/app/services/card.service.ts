import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  serverurl = "http://localhost:3000/"
  constructor(private http:HttpClient) { }
  displaydata(){
    return this.http.get(this.serverurl+'event')
  }
}
