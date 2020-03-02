import { TestBed } from '@angular/core/testing';

import { AppApiCallService } from './app-api-call.service';

describe('AppApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppApiCallService = TestBed.get(AppApiCallService);
    expect(service).toBeTruthy();
  });
});
