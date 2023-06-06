import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  private applicationsUrl: string;

  constructor(private http: HttpClient) { 
    this.applicationsUrl = 'http://localhost:4200/api/applications';
  }

  public findAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationsUrl);
  }

  public findById(id: number): Observable<Application> {
    return this.http.get<Application>(this.applicationsUrl + '/' + id);
  }

  public save(application: Application): Observable<Application> {
    return this.http.post<Application>(this.applicationsUrl, application);
  }
}
