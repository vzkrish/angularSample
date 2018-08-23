import { TestBed, inject } from '@angular/core/testing';

import { SouthServiceAPIService } from './south-service-api.service';

describe('SouthServiceAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SouthServiceAPIService]
    });
  });

  it('should be created', inject([SouthServiceAPIService], (service: SouthServiceAPIService) => {
    expect(service).toBeTruthy();
  }));
});
