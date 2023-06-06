import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent {

  constructor(private jobpostService: JobpostService, private companyService: CompanyService, private myRouter: Router) { }

  company!: Company;

  today = new Date();

  jobpost = {
    id: -1,
    title: " ",
    company: this.company,
    city: " ",
    date: this.today,
    description: " "
  }

  getVal(name: string, city: string, description: string) {

    this.companyService.findById(2).subscribe(data => {

      this.company = data

      this.jobpost = {
        id: -1,
        title: name,
        company: this.company,
        city: city,
        date: this.today,
        description: description
      }

      this.jobpostService.addJobPost(this.jobpost);
      this.myRouter.navigateByUrl('create-posting-success-page-component');

    });

  }

}
