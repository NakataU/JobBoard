import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingCandidatesPageComponent } from './posting-candidates-page.component';

describe('PostingCandidatesPageComponent', () => {
  let component: PostingCandidatesPageComponent;
  let fixture: ComponentFixture<PostingCandidatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingCandidatesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingCandidatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
