import { TestBed } from '@angular/core/testing';

import { LibEventService } from './lib-event.service';

describe('LibEventService', () => {
  let service: LibEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
