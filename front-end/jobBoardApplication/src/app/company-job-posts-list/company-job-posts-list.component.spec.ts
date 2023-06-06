import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobPostsListComponent } from './company-job-posts-list.component';

describe('CompanyJobPostsListComponent', () => {
  let component: CompanyJobPostsListComponent;
  let fixture: ComponentFixture<CompanyJobPostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobPostsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
