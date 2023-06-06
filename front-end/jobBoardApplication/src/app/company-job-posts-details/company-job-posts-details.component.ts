import { Component, Input, OnChanges } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-company-job-posts-details',
  templateUrl: './company-job-posts-details.component.html',
  styleUrls: ['./company-job-posts-details.component.scss']
})
export class CompanyJobPostsDetailsComponent {
  jobPost!: JobPost;
  @Input() id!: number;

  constructor(private jobpostService: JobpostService) { }

  deleteJobPost():void {
   this.jobpostService.deleteJobPost(this.jobPost.id);
  }

  refreshPage():void{
    window.location.reload();
  }

  ngOnChanges(): void {
    if(this.id) {
      this.jobpostService.findById(this.id).subscribe(data =>
        this.jobPost = data);
    }
  };
}