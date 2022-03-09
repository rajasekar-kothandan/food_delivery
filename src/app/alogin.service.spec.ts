import { TestBed } from '@angular/core/testing';

import { AloginService } from './alogin.service';

describe('AloginService', () => {
  let service: AloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
