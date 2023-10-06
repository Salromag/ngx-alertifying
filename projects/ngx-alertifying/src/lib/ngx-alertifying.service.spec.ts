import { TestBed } from '@angular/core/testing';

import { NgxAlertifyingService } from './ngx-alertifying.service';

describe('NgxAlertifyingService', () => {
  let service: NgxAlertifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAlertifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
