import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUITS } from '../mock/produits/produits';
import { Produit } from '../interfaces/produit';
import { DetailProduitService } from '../services/detail-produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  produits = PRODUITS;
  // typeProduit!: Produit;

  constructor(
    private route: ActivatedRoute,
    private detailProduitService: DetailProduitService,
    ){}

  ngOnInit(): void {

    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.detailProduitService.getProuditById(id);
    // });
    // const produitId = +this.route.snapshot.params['id'];
    // this.produits = this.detailProduitService.getProuditById(produitId);
    // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('id'));
  
    // Find the product that correspond with the id provided in route.
    // this.produits = this.Produit.find(produit => produit.id === productIdFromRoute);
  }


  // ngOnInit(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.article = this.articleService.getArticle(id);
  // }
  

}
