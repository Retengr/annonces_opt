import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../domaine/annonce';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  @Input() annonce: Annonce;
  detailAAfficher: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail() {
    this.detailAAfficher = ! this.detailAAfficher;
  }
}
