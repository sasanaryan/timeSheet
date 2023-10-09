import { TestBed } from '@angular/core/testing';

import { SharedTimesheetService } from './shared-timesheet.service';

describe('SharedTimesheetService', () => {
  let service: SharedTimesheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedTimesheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
