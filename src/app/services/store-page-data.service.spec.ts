import { TestBed } from '@angular/core/testing';

import { StorePageDataService } from './store-page-data.service';

describe('StorePageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorePageDataService = TestBed.get(StorePageDataService);
    expect(service).toBeTruthy();
  });
});
