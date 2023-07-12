import { TestBed } from '@angular/core/testing';

import { AppConfigClientService } from './app-config-client.service';

describe('AppConfigClientService', () => {
  let service: AppConfigClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
