import { Injectable } from '@angular/core';

import { Annonce } from '../domaine/annonce';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class AnnonceService {
  annoncesBaseUrl = '/api/annonces';
  annonces: Annonce[];

  constructor(private http: HttpClient) { }
 
  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.annoncesBaseUrl);
}

  getAnnoncesByCategorie(cat: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.annoncesBaseUrl+"/category/"+cat);
  }
}   