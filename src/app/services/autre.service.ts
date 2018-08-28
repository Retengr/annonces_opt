import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutreService {

  constructor() { }
  
  getValue():number {
    return Math.floor(Math.random() * 100) ;
  }
}
