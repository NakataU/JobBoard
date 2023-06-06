import { Component } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-company-job-posts-page',
  templateUrl: './company-job-posts-page.component.html',
  styleUrls: ['./company-job-posts-page.component.css']
})
export class CompanyJobPostsPageComponent {

  jobposts: JobPost[] = [];
  jobPostId!: number;

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

  onJobPostIdChanged(id: number): void {
    this.jobPostId = id;
  }

}
