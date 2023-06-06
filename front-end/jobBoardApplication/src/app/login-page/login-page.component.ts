import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  
  constructor(private profileService: ProfileService, private myRouter: Router){} 

  profile = {
      id: -1,
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " "
      };

    static ID:number;
    static isCompany:boolean;
  
  getVal(email:string,password:string)
    {

      this.profileService.findByEmail(email).subscribe(data => {
        this.profile = data
        
        if(this.profile!=null && password == this.profile.password){
        LoginPageComponent.ID = this.profile.id;
        this.myRouter.navigateByUrl('home-page-component');
       }
        
      });
    }

    static getID(): number {
      return this.ID;
    }

    static setIDToMinusOne():void {
        this.ID = -1;
    }

}
