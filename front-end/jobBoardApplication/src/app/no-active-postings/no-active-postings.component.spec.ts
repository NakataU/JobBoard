import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoActivePostingsComponent } from './no-active-postings.component';

describe('NoActivePostingsComponent', () => {
  let component: NoActivePostingsComponent;
  let fixture: ComponentFixture<NoActivePostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoActivePostingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoActivePostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
