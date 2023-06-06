import { Component, Input, OnChanges } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-job-posting-details',
  templateUrl: './job-posting-details.component.html',
  styleUrls: ['./job-posting-details.component.scss']
})
export class JobPostingDetailsComponent implements OnChanges {
  jobPost!: JobPost;
  @Input() id!: number;

  constructor(private jobpostService: JobpostService) { }

  ngOnChanges(): void {
    if(this.id) {
      this.jobpostService.findById(this.id).subscribe(data =>
        this.jobPost = data);
    }
  };
}
