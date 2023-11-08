import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employe } from '../interfaces/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {

  private url = `${environment.api}/api/v1/rest`;

  constructor(private http : HttpClient){}

  getEmploye(): Observable<any> {
    return this.http.get<any>(`${this.url}/employes`);
  }

  saveEmploye(employe: Employe): Observable<any> {
  return this.http.post<any>(`${this.url}/employes`,employe);
}

}