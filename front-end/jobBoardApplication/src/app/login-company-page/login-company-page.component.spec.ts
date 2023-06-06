import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompanyPageComponent } from './login-company-page.component';

describe('LoginCompanyPageComponent', () => {
  let component: LoginCompanyPageComponent;
  let fixture: ComponentFixture<LoginCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCompanyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
