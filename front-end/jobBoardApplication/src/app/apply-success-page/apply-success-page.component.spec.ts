import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySuccessPageComponent } from './apply-success-page.component';

describe('ApplySuccessPageComponent', () => {
  let component: ApplySuccessPageComponent;
  let fixture: ComponentFixture<ApplySuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplySuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplySuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
