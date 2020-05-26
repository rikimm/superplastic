import { TestBed } from '@angular/core/testing';

import { JankyService } from './janky.service';

describe('JankyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JankyService = TestBed.get(JankyService);
    expect(service).toBeTruthy();
  });
});
