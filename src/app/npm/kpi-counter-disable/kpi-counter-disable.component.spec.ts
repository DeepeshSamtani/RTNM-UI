import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCounterDisableComponent } from './kpi-counter-disable.component';

describe('KpiCounterDisableComponent', () => {
  let component: KpiCounterDisableComponent;
  let fixture: ComponentFixture<KpiCounterDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiCounterDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiCounterDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
