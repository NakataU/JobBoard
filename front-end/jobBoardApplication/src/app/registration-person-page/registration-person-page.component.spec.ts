import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPersonPageComponent } from './registration-person-page.component';

describe('RegistrationPersonPageComponent', () => {
  let component: RegistrationPersonPageComponent;
  let fixture: ComponentFixture<RegistrationPersonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPersonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
