import { TestBed, inject } from '@angular/core/testing';

import { GetClassService } from './get-class.service';

describe('GetClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClassService]
    });
  });

  it('should be created', inject([GetClassService], (service: GetClassService) => {
    expect(service).toBeTruthy();
  }));
});
