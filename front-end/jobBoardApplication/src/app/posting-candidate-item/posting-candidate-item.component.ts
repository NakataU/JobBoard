import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplyService } from '../apply.service';

@Component({
  selector: 'app-posting-candidate-item',
  templateUrl: './posting-candidate-item.component.html',
  styleUrls: ['./posting-candidate-item.component.scss']
})
export class PostingCandidateItemComponent implements OnInit{
  classApplied=false;

  applications: Application[] = [];

  constructor(private applicationService: ApplyService) {}
  
  ngOnInit(): void {
    this.applicationService.findAll().subscribe(data => {
      this.applications = data;
    });}


  toggleClass(application: Application) {
    this.classApplied = !this.classApplied;

    
  }
}
