import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-registration-company-page',
  templateUrl: './registration-company-page.component.html',
  styleUrls: ['./registration-company-page.component.scss']
})
export class RegistrationCompanyPageComponent {
  constructor(private companyService: CompanyService, private myRouter: Router){} 

  company = {
      id: 12,
      name: " ",
      email: " ",
      phoneNumber: " ",
      city: " ",
      address: " ",
      website: " ",
      description: " ",
      password: " ",
      imageUrl: " "
      };
  
  getVal(CName:string,logo:string,email:string,password:string,tel:string,city:string,address:string,website:string,opisanie:string)
    {
  
      this.company = {
      id: 12,
      name:CName,
      email: email,
      phoneNumber: tel,
      city: city,
      address: address,
      website: website,
      description: opisanie,
      password: password,
      imageUrl: logo
        };
  
        this.companyService.addCompany(this.company);
        this.myRouter.navigateByUrl('home-page-component');
  
    }
}
