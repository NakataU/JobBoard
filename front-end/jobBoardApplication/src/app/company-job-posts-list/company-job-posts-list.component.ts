import { Component, EventEmitter, Output } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-company-job-posts-list',
  templateUrl: './company-job-posts-list.component.html',
  styleUrls: ['./company-job-posts-list.component.scss']
})
export class CompanyJobPostsListComponent {
  jobposts: JobPost[] = [];
  @Output() jobPostIdChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private jobpostService: JobpostService) {}

  ngOnInit(): void{
    this.jobpostService.findAll().subscribe(data =>
      this.jobposts = data
    )
  };

  onJobItemClick(id: number): void {
    this.jobPostIdChanged.emit(id);
  }

}
