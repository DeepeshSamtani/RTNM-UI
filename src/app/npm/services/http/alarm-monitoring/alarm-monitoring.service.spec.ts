import { TestBed, inject } from '@angular/core/testing';

import { AlarmMonitoringService } from './alarm-monitoring.service';

describe('AlarmMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmMonitoringService]
    });
  });

  it('should be created', inject([AlarmMonitoringService], (service: AlarmMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
