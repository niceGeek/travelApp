import { TestBed, inject } from '@angular/core/testing';

import { FahrerService } from './fahrer.service';

describe('FahrerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FahrerService]
    });
  });

  it('should be created', inject([FahrerService], (service: FahrerService) => {
    expect(service).toBeTruthy();
  }));
});
