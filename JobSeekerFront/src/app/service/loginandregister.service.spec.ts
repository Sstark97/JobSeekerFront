import { TestBed } from '@angular/core/testing';

import { LoginandregisterService } from './loginandregister.service';

describe('LoginandregisterService', () => {
  let service: LoginandregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginandregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
