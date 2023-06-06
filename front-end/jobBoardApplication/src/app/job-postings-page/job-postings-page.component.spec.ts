import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingsPageComponent } from './job-postings-page.component';

describe('JobPostingsPageComponent', () => {
  let component: JobPostingsPageComponent;
  let fixture: ComponentFixture<JobPostingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
