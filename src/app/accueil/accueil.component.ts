import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../mock/produits/produits';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  produits = PRODUITS;

  listEmploye:any;

  constructor( private employeService : EmployeService ){}

  ngOnInit(): void {
    this.getEmploye();
  }

  getEmploye(){
    const getEmploye = this.employeService.getEmploye();
    getEmploye.subscribe((result) => {
      this.listEmploye = result;
      console.log(this.listEmploye, "this.listEmploye");
    })
  }

}
