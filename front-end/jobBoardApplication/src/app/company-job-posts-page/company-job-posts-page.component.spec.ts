import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobPostsPageComponent } from './company-job-posts-page.component';

describe('CompanyJobPostsPageComponent', () => {
  let component: CompanyJobPostsPageComponent;
  let fixture: ComponentFixture<CompanyJobPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobPostsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
