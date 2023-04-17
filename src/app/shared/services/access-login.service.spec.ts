import { TestBed } from '@angular/core/testing';

import { AccessLoginService } from './access-login.service';

describe('AccessLoginService', () => {
  let service: AccessLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
