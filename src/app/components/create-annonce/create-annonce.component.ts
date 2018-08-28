import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {
  titre: String;
  texte: String;
  prix: String;

  constructor() { }

  ngOnInit(){}
  
  save() {
    console.log(this.titre+"/"+this.texte+"/"+this.prix)
  }

}
