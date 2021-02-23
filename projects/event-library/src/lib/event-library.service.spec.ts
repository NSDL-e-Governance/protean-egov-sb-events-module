import { TestBed } from '@angular/core/testing';

import { EventModuleService } from './event-library.service';

describe('EventModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventModuleService = TestBed.get(EventModuleService);
    expect(service).toBeTruthy();
  });
});
