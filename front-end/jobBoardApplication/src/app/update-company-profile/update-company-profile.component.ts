import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-update-company-profile',
  templateUrl: './update-company-profile.component.html',
  styleUrls: ['./update-company-profile.component.css']
})
export class UpdateCompanyProfileComponent {

  constructor(private companyService: CompanyService, private myRouter: Router) { }

  company!: Company;

  getVal(name: string, logo: string, mail: string, phone: string, city: string, address: string, description: string, website: string) {

    this.companyService.findById(1).subscribe(data => {

      this.company = data;

      this.company = {
        id: this.company.id,
        name: name,
        email: mail,
        phoneNumber: phone,
        city: city,
        address: address,
        website: website,
        description: description,
        password: this.company.password,
        imageUrl: logo
      }

      this.companyService.updateCompany(this.company.id, this.company)
      this.myRouter.navigateByUrl('update-profile-success-page-component')
    });


  }
}
