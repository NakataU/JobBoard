import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileSuccessPageComponent } from './update-profile-success-page.component';

describe('UpdateProfileSuccessPageComponent', () => {
  let component: UpdateProfileSuccessPageComponent;
  let fixture: ComponentFixture<UpdateProfileSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileSuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
