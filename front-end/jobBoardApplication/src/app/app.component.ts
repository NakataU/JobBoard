import { Component, OnChanges, Input, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { LoginCompanyPageComponent } from './login-company-page/login-company-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'jobBoardApplication';
  @Input() isLoggedIn = false;

  constructor() { }

  resetId() : void {
    LoginPageComponent.setIDToMinusOne();
  }

  ngAfterContentChecked() {
    if(LoginPageComponent.getID() != null || LoginCompanyPageComponent.getID() != null) {
       this.isLoggedIn = true; 
    } else{
    }
  }
  
   
}
