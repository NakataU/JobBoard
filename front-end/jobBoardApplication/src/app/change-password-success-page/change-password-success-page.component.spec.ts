import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordSuccessPageComponent } from './change-password-success-page.component';

describe('ChangePasswordSuccessPageComponent', () => {
  let component: ChangePasswordSuccessPageComponent;
  let fixture: ComponentFixture<ChangePasswordSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordSuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
