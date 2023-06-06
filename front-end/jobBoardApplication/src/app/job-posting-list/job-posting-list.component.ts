import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';


@Component({
  selector: 'app-job-posting-list-item',
  templateUrl: './job-posting-list.component.html',
  styleUrls: ['./job-posting-list.component.scss']
})
export class JobPostingListComponent implements OnChanges {

  jobposts: JobPost[] = [];
  @Output() jobPostIdChanged: EventEmitter<number> = new EventEmitter<number>();

  @Input() filters!: string[];

  constructor(private jobpostService: JobpostService) {}

  ngOnInit(): void{
    this.jobpostService.findAll().subscribe(data =>
      this.jobposts = data
    )
  };

  onJobItemClick(id: number): void {
    this.jobPostIdChanged.emit(id);
  }

  ngOnChanges() {
    if(this.filters.length == 2) {
      this.jobpostService.findAll().subscribe(data => {
        this.jobposts = data;
        // this.jobposts = this.jobposts.filter(jb => jb.title.includes(this.filters[0]) || jb.description.includes(this.filters[1]));
        this.jobposts = this.jobposts.filter(jb => jb.title.includes(this.filters[0]) && jb.description.includes(this.filters[1]));
      })
    } else if(this.filters.length == 1) {
      this.jobpostService.findAll().subscribe(data => {
        this.jobposts = data;
        this.jobposts = this.jobposts.filter(jb => jb.title.includes(this.filters[0]));
      })
    } else {
      this.jobpostService.findAll().subscribe(data =>
        this.jobposts = data
      )
    }

    setTimeout(() => {
      this.jobposts = this.jobposts;
    });
  }

}
