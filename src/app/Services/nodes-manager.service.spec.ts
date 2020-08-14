import { TestBed } from '@angular/core/testing';

import { NodesManagerService } from './nodes-manager.service';

describe('NodesManagerService', () => {
  let service: NodesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
