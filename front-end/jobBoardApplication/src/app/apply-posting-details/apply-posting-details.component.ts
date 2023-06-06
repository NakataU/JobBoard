import { Component, OnInit } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-apply-posting-details',
  templateUrl: './apply-posting-details.component.html',
  styleUrls: ['./apply-posting-details.component.scss']
})
export class ApplyPostingDetailsComponent implements OnInit {
  jobPost!: JobPost;

  constructor(private jobPostService: JobpostService) {}

  ngOnInit() {
    this.jobPostService.findById(2).subscribe(data => this.jobPost=data);
  }
}
