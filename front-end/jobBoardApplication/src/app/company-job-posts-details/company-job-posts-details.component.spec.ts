import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobPostsDetailsComponent } from './company-job-posts-details.component';

describe('CompanyJobPostsDetailsComponent', () => {
  let component: CompanyJobPostsDetailsComponent;
  let fixture: ComponentFixture<CompanyJobPostsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobPostsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobPostsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
