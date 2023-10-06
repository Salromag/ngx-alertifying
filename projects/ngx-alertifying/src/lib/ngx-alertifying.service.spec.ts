import { TestBed } from '@angular/core/testing';

import { NgxAlertifyingService } from './ngx-alertifying.service';
import { CONFIG } from '../lib/shared/injection-token/config-token';

describe('NgxAlertifyingService', () => {
  let service: NgxAlertifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: CONFIG, useValue: { } }
      ]
    });
    service = TestBed.inject(NgxAlertifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
