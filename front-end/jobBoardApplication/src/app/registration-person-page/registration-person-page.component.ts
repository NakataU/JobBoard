import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-registration-person-page',
  templateUrl: './registration-person-page.component.html',
  styleUrls: ['./registration-person-page.component.scss']
})
export class RegistrationPersonPageComponent {
  constructor(private profileService: ProfileService, private myRouter: Router){} 

profile = {
    id: 12,
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " "
    };

getVal(fName:string,lName:string,email:string,password:string)
  {

      this.profile = {
      id: 12,
      firstName: fName,
      lastName: lName,
      email: email,
      password: password
      };

      this.profileService.addProfile(this.profile);
      this.myRouter.navigateByUrl('home-page-component');

  }

}
