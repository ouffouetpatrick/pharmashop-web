import { Component, ElementRef, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employe } from '../interfaces/employe';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit{

  employeForm: FormGroup | any;
  employe!: Employe;
  showSuccessAlert: boolean = false;
  // @ViewChild('signInModal') signInModal!: ElementRef; // Utilisez @ViewChild pour obtenir une référence au modal

  constructor(
    private _formBuilder: FormBuilder,
    private _employeService: EmployeService,
  ){}


  ngOnInit(): void {
      this.generateEmployeForm();
  }

  generateEmployeForm(){
    this.employeForm = this._formBuilder.group({
      id: [this.employe ? this.employe.id : null],
      nom: [this.employe ? this.employe.nom : "", Validators.required],
      prenoms: [this.employe ? this.employe.prenoms : "", Validators.required],
      email: [this.employe ? this.employe.email : "", [Validators.required, Validators.email]],
      password: [this.employe ? this.employe.password : "", Validators.required],
    })
  }

  save(){
    const employe: any = this.employeForm.value;
    employe.dateCreation = new Date().toISOString(); //Capturer la dateCreation à la soumission du fomulaire
    const send = this._employeService.saveEmploye(employe);
  
    send.subscribe(async (result) => {
      if (result) {
        this.employeForm.reset();
        this.showSuccessAlert = true;
        setTimeout(() => { this.showSuccessAlert = false;}, 1000);
      }
    });
  }
  
}
