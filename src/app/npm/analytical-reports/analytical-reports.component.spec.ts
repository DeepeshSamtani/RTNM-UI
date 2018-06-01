import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalReportsComponent } from './analytical-reports.component';

describe('AnalyticalReportsComponent', () => {
  let component: AnalyticalReportsComponent;
  let fixture: ComponentFixture<AnalyticalReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticalReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
