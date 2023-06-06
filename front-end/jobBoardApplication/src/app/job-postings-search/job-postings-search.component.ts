import { Component, EventEmitter, Output } from '@angular/core';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-job-postings-search',
  templateUrl: './job-postings-search.component.html',
  styleUrls: ['./job-postings-search.component.scss']
})
export class JobPostingsSearchComponent {

  @Output() filterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();


  constructor(private jobpostService: JobpostService) {}

  onSearchClick(keyword: string, city:string): void {
    this.filterChanged.emit([keyword, city]);
  }
}
