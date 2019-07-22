import { TestBed } from '@angular/core/testing';

import { NutriNETService } from './nutri-net.service';

describe('NutriNETService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutriNETService = TestBed.get(NutriNETService);
    expect(service).toBeTruthy();
  });
});
