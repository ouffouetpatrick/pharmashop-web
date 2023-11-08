import { Injectable } from "@angular/core";
import { Produit } from "../interfaces/produit";
import { PRODUITS } from "../mock/produits/produits";

@Injectable({
  providedIn: 'root'
})

export class DetailProduitService {

    produits = PRODUITS;

    getProuditById(id: number): Produit {
        const detailProduits = this.produits.find(produits => produits.id === id);
        if (!detailProduits) {
            throw new Error('Le produit n\'a pas été trouvé!');
        } else {
            console.log(detailProduits);
            
            return detailProduits;
        }
      }
}