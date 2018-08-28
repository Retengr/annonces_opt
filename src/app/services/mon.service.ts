import { Injectable } from '@angular/core';
import { AutreService } from './autre.service';

@Injectable({
  providedIn: 'root'
})
export class MonService {

  constructor(private autreService:AutreService) { }
  compute(p:number) { 
   var value = this.autreService.getValue(); 
   value = value * p;
   return value;
   } 
 

}
