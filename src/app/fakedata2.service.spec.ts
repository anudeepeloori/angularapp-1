import { TestBed } from '@angular/core/testing';

import { Fakedata2Service } from './fakedata2.service';

describe('Fakedata2Service', () => {
  let service: Fakedata2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fakedata2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
