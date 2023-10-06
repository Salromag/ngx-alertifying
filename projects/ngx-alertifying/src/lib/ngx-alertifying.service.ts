import { Injectable, Inject } from '@angular/core';
import { NgxAlertifyingConfig } from './shared/interfaces/ngx-alertifying-config.interface';
import { CONFIG } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class NgxAlertifyingService {

  constructor(@Inject(CONFIG) private config?: NgxAlertifyingConfig) { 
  }

  getConfiguration(): NgxAlertifyingConfig {
    return this.config || new NgxAlertifyingConfig();
  }
}
