import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobPostListingPageComponent } from './company-job-post-listing-page.component';

describe('CompanyJobPostListingPageComponent', () => {
  let component: CompanyJobPostListingPageComponent;
  let fixture: ComponentFixture<CompanyJobPostListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobPostListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobPostListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
