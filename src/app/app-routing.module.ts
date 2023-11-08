import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { BlogComponent } from './blog/blog.component';
import { AproposComponent } from './apropos/apropos.component';
import { PanierComponent } from './panier/panier.component';
import { CommanderComponent } from './commander/commander.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'pharmacie', component: PharmacieComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'commander', component: CommanderComponent },
  // Ajout d'un paramètre dynamique :id
  { path: 'detail-produit/:id', component: DetailProduitComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
