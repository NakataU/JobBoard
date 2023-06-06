import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobPost } from './job-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobpostService {

  private jobpostsUrl: string;

  constructor(private http: HttpClient) { 
    this.jobpostsUrl = 'http://localhost:4200/api/jobposts';
  }

  public findAll(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(this.jobpostsUrl);
  }

  public findById(id: number): Observable<JobPost> {
    return this.http.get<JobPost>(this.jobpostsUrl + '/' + id);
  }

  public addJobPost(jobpost: JobPost): void{
    this.http.post<JobPost>(this.jobpostsUrl + "/add",jobpost)
    .subscribe(
      data => {
        console.log("Jobpost added successfully", data);
      },
      error => {
        console.error("Error adding jobpost", error);
      }
    ); 
  }

  public deleteJobPost(jobpostId: number): void{
    this.http.delete<JobPost>(this.jobpostsUrl + "/deleteJobPost/" + jobpostId)
    .subscribe(
      data => {
        console.log("Jobpost deleted successfully", data);
      },
      error => {
        console.error("Error deleting jobpost", error);
      }
    ); 
  }
}
