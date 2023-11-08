import { Produit } from "src/app/interfaces/produit";

// export interface Produit {
//   id: number;
//   categorie: string;
//   nom: string;
//   prix: number;
//   reduction?: number;
//   image: string;
// }

export const PRODUITS: Produit[] = [
  { 
    id: 1, 
    categorie: 'Aceesoire medical',
    nom: 'Produit1',
    prix: 38473,
    image : 'assets/img/pr-1.jpg'
  },
  { 
    id: 2, 
    categorie: 'Medical',
    nom: 'Produit2',
    prix: 6764,
    reduction: 5468,
    image : 'assets/img/pr-2.jpg'
  },
  { 
    id: 3, 
    categorie: 'Supplie',
    nom: 'Produit3',
    prix: 5790,
    image : 'assets/img/pr-3.jpg'
  },
  { 
    id: 4, 
    categorie: 'Medical',
    nom: 'Produit4',
    prix: 4000,
    reduction: 1500,
    image : 'assets/img/pr-4.jpg'
  },
  { 
    id: 5, 
    categorie: 'Aceesoire medical',
    nom: 'Produit5',
    prix: 65876,
    reduction: 3435,
    image : 'assets/img/pr-5.jpg'
  },
  { 
    id: 6, 
    categorie: 'Medical',
    nom: 'Produit6',
    prix: 9776,
    reduction: 6538,
    image : 'assets/img/pr-6.jpg'
  },
  { 
    id: 7, 
    categorie: 'Medical',
    nom: 'Produit7',
    prix: 78656,
    image : 'assets/img/pr-7.jpg'
  },
  { 
    id: 8, 
    categorie: 'Aceesoire medical',
    nom: 'Produit8',
    prix: 6578,
    reduction: 1546,
    image : 'assets/img/pr-8.jpg'
  },

];