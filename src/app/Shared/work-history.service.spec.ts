import { TestBed } from '@angular/core/testing';

import { WorkHistoryService } from './work-history.service';

describe('WorkHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkHistoryService = TestBed.get(WorkHistoryService);
    expect(service).toBeTruthy();
  });
});
