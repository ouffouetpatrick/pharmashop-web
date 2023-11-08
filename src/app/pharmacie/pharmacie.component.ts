import { Component } from '@angular/core';
import { PRODUITS } from '../mock/produits/produits';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent {
  produits = PRODUITS;
}
