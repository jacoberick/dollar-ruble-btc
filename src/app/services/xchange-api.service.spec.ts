import { TestBed } from '@angular/core/testing';

import { XchangeAPIService } from './xchange-api.service';

describe('XchangeAPIService', () => {
  let service: XchangeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XchangeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
