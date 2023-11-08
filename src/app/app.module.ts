import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { BlogComponent } from './blog/blog.component';
import { AproposComponent } from './apropos/apropos.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierComponent } from './panier/panier.component';
import { CommanderComponent } from './commander/commander.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    PharmacieComponent,
    BlogComponent,
    AproposComponent,
    NewsletterComponent,
    ConnexionComponent,
    PanierComponent,
    CommanderComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    // MatSnackBarModule,
    // MatDialogModule
  ],
  providers: [
    EmployeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
