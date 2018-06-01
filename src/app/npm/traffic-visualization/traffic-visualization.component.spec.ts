import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficVisualizationComponent } from './traffic-visualization.component';

describe('TrafficVisualizationComponent', () => {
  let component: TrafficVisualizationComponent;
  let fixture: ComponentFixture<TrafficVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
