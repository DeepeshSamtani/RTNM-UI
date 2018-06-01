import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwanreportsComponent } from './iwanreports.component';

describe('IwanreportsComponent', () => {
  let component: IwanreportsComponent;
  let fixture: ComponentFixture<IwanreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwanreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwanreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
