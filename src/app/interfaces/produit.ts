export interface Produit {
    id: number;
    categorie: string;
    nom: string;
    prix: number;
    reduction?: number;
    image: string;
}