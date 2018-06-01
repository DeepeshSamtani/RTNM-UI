import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDeleteDialogComponent } from './kpi-delete-dialog.component';

describe('KpiDeleteDialogComponent', () => {
  let component: KpiDeleteDialogComponent;
  let fixture: ComponentFixture<KpiDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
