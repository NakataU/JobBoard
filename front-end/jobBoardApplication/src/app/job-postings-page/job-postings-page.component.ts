import { Component } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-job-postings-page',
  templateUrl: './job-postings-page.component.html',
  styleUrls: ['./job-postings-page.component.scss']
})
export class JobPostingsPageComponent {

  jobposts: JobPost[] = [];
  jobPostId!: number;

  filters: string[] = [];

  constructor(private jobpostService: JobpostService) {}

  ngOnInit(): void{
    this.jobpostService.findAll().subscribe(data =>
      {
        this.jobposts = data;
        this.jobPostId = this.jobposts[0]?.id;
      }
    )
    //this.jobPostingsToggle();
  };

  // jobPostingsToggle(){
  //   let listItems = document.getElementsByClassName('list-group-item list-group-item-action');
  //   listItems.forEach(element => {
  //     element.classList.toggle('active');
  //   });

  // }

  onJobPostIdChanged(id: number): void {
    this.jobPostId = id;
  }

  onSearchFilterChange(filters: string[]): void {
    this.filters = filters;
  }
}
