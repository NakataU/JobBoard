import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesListItemComponent } from './companies-list-item.component';

describe('CompaniesListItemComponent', () => {
  let component: CompaniesListItemComponent;
  let fixture: ComponentFixture<CompaniesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
