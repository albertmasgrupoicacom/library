import { TestBed } from '@angular/core/testing';

import { IcaService } from './ica.service';

describe('IcaService', () => {
  let service: IcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
