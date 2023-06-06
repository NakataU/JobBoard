import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingsSearchComponent } from './job-postings-search.component';

describe('JobPostingsSearchComponent', () => {
  let component: JobPostingsSearchComponent;
  let fixture: ComponentFixture<JobPostingsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
