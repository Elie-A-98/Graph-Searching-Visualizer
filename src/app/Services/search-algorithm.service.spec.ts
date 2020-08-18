import { TestBed } from '@angular/core/testing';

import { SearchAlgorithmService } from './search-algorithm.service';

describe('SearchAlgorithmService', () => {
  let service: SearchAlgorithmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAlgorithmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
