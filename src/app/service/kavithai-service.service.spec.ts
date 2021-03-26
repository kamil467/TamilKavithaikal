import { TestBed } from '@angular/core/testing';

import { KavithaiServiceService } from './kavithai-service.service';

describe('KavithaiServiceService', () => {
  let service: KavithaiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KavithaiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
