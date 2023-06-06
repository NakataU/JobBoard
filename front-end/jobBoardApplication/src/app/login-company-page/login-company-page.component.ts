import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-login-company-page',
  templateUrl: './login-company-page.component.html',
  styleUrls: ['./login-company-page.component.css']
})
export class LoginCompanyPageComponent {
  constructor(private companyService: CompanyService, private myRouter: Router){} 

  company= {
  id: -1,
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  address: "",
  website: "",
  description: "",
  password: "",
  imageUrl: ""
  }

    static ID:number;
  
  
  getVal(email:string,password:string)
    {

      this.companyService.findByEmail(email).subscribe(data => {
        this.company = data
        
        if(this.company!=null && password == this.company.password){
        LoginCompanyPageComponent.ID = this.company.id;
        this.myRouter.navigateByUrl('home-page-component');
       }
        
      });
    }

    static getID(): number {
      return this.ID;
    }
}
