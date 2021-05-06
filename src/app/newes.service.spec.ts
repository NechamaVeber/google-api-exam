import { TestBed } from '@angular/core/testing';

import { NewesService } from './newes.service';

describe('NewesService', () => {
  let service: NewesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
