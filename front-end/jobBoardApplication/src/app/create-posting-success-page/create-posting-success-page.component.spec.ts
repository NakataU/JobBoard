import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostingSuccessPageComponent } from './create-posting-success-page.component';

describe('CreatePostingSuccessPageComponent', () => {
  let component: CreatePostingSuccessPageComponent;
  let fixture: ComponentFixture<CreatePostingSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostingSuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostingSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
