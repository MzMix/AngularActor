import { TestBed } from '@angular/core/testing';

import { KnownForService } from './movie-details.service';

describe('KnownForService', () => {
  let service: KnownForService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnownForService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
