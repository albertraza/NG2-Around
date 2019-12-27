import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingFormComponent } from './app-listing-form.component';

describe('AppListingFormComponent', () => {
  let component: AppListingFormComponent;
  let fixture: ComponentFixture<AppListingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
