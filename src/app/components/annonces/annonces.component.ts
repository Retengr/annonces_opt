import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../domaine/annonce';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})

export class AnnoncesComponent implements OnInit {
  annonces: Observable<Annonce[]>;
  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.search(p.categorie));
  }

  ngOnInit() {
  }

  search(categorie: String) {
    
    let p = 1;

    if (categorie == null) {
      this.annonces = this.annonceService.getAllAnnonces();
    } else {
      switch (categorie) {
        case 'immo': {
          p = 1;
          break;
        }
        case 'info':{
          p = 2;
          break;
        }
        case 'voiture':{
          p = 3;
          break;
        }
        default:{
          p = 3;
        }
      }
      this.annonces = this.annonceService.getAnnoncesByCategorie(p);
    }
    console.log(this.annonces);
  }

}