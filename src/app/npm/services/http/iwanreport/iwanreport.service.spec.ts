import { TestBed, inject } from '@angular/core/testing';

import { IwanreportService } from './iwanreport.service';

describe('IwanreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IwanreportService]
    });
  });

  it('should be created', inject([IwanreportService], (service: IwanreportService) => {
    expect(service).toBeTruthy();
  }));
});
