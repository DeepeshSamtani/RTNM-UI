import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMonitoringComponent } from './alarm-monitoring.component';

describe('AlarmMonitoringComponent', () => {
  let component: AlarmMonitoringComponent;
  let fixture: ComponentFixture<AlarmMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
