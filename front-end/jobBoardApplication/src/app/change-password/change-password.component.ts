import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private profileService: ProfileService, private myRouter: Router) { }

  profile!: Profile;

  getVal(currentP: string, newP: string, newP_2: string) {
    this.profileService.findById(LoginPageComponent.getID()).subscribe(data => {
      this.profile = data

      if (newP == newP_2 && this.profile.password == currentP && newP != currentP) {
        this.profile.password = newP;
        this.myRouter.navigateByUrl('change-password-success-page-component');
      } else {

      }

      this.profileService.updateProfile(LoginPageComponent.getID(), this.profile);
      this.myRouter.navigateByUrl('change-password-success-page-component');
    });

  }
}
