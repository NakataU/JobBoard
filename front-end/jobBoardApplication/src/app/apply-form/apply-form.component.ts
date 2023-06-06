import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../application';
import { ApplyService } from '../apply.service';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {

  jobPost!: JobPost;
  cvUploaded!: File;
  applyFormProps: Application = {
    id: 5,
    jobPost: this.jobPost,
    firstName: "",
    lastName: "",
    email: "",
    favoured: true,
    cv: this.cvUploaded
  }

  constructor(private applyService: ApplyService, private jobpostService: JobpostService, private myRouter: Router) {}
  
  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
        this.cvUploaded = file;
    }
  }

  getValue(fname: string, lname: string, email: string): void {
    this.jobpostService.findById(2).subscribe(data => {
      this.jobPost = data;
    
      this.applyFormProps = {
        id: -1,
        jobPost: this.jobPost,
        firstName: fname,
        lastName: lname,
        email: email,
        favoured: false,
        cv: this.cvUploaded
      };
    
      this.applyService.save(this.applyFormProps).subscribe();
      this.myRouter.navigateByUrl('app-apply-success-page');

    });
  }

}
