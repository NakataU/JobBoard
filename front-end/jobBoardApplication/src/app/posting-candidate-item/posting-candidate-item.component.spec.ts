import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingCandidateItemComponent } from './posting-candidate-item.component';

describe('PostingCandidateItemComponent', () => {
  let component: PostingCandidateItemComponent;
  let fixture: ComponentFixture<PostingCandidateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingCandidateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingCandidateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
