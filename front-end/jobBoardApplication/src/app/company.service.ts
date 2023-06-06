import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl: string;

  constructor(private http: HttpClient) { 
    this.companiesUrl = 'http://localhost:4200/api/companies/';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl + "all/");
  }

  public findById(id: number): Observable<Company> {
    return this.http.get<Company>(this.companiesUrl + id);
  }

  public findByEmail(email: string): Observable<Company> {
    return this.http.get<Company>(this.companiesUrl + 'ByEmail/' + email);
  }

  public addCompany(Company: Company): void {
    this.http.post<Company>(this.companiesUrl + "/add", Company)
    .subscribe(
      data => {
        console.log("Company added successfully", data);
      },
      error => {
        console.error("Error adding Company", error);
      }
    );  
  }

    public updateCompany(id: number, company: Company): void {
      this.http.put<Company>(this.companiesUrl + "/update/" + id, company)
      .subscribe(
        data => {
          console.log("Company updated successfully", data);
        },
        error => {
          console.error("Error updating company", error);
        }
      );
    }
    
 }