import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityManagementAutomationComponent } from './capacity-management-automation.component';

describe('CapacityManagementAutomationComponent', () => {
  let component: CapacityManagementAutomationComponent;
  let fixture: ComponentFixture<CapacityManagementAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityManagementAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityManagementAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
