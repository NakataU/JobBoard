import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-change-company-password',
  templateUrl: './change-company-password.component.html',
  styleUrls: ['./change-company-password.component.css']
})
export class ChangeCompanyPasswordComponent {

  constructor(private companyService: CompanyService, private myRouter: Router) { }

  company!: Company;

  getVal(currentP: string, newP: string, newP_2: string) {
    this.companyService.findById(1).subscribe(data => {

      this.company = data

      if (newP == newP_2 && this.company.password == currentP && newP != currentP) {
        this.company.password = newP;
        this.myRouter.navigateByUrl('change-password-success-page-component');
      } else {

      }

      this.companyService.updateCompany(1, this.company);
      this.myRouter.navigateByUrl('change-password-success-page-component');
    });

  }
}
