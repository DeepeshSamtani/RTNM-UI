import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTableLoaderComponent } from './chart-table-loader.component';

describe('ChartTableLoaderComponent', () => {
  let component: ChartTableLoaderComponent;
  let fixture: ComponentFixture<ChartTableLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTableLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTableLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
