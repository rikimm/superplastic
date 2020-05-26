import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JankyService {

  constructor(
    private http:HttpClient
  ) { }
  getJanky(){
    return this.http.get(`./assets/json/janki.json`)
  }
}
