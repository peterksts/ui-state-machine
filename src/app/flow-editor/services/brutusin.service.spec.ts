import { TestBed, inject } from '@angular/core/testing';

import { BrutusinService } from './brutusin.service';

describe('BrutusinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrutusinService]
    });
  });

  it('should be created', inject([BrutusinService], (service: BrutusinService) => {
    expect(service).toBeTruthy();
  }));
});
