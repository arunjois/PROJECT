import { TestBed, inject } from '@angular/core/testing';

import { ParseJsonService } from './parse-json.service';

describe('ParseJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseJsonService]
    });
  });

  it('should be created', inject([ParseJsonService], (service: ParseJsonService) => {
    expect(service).toBeTruthy();
  }));
});
