import { Injectable, Inject } from '@angular/core';
import { NgxAlertifyingConfig } from './shared/interfaces/ngx-alertifying-config.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxAlertifyingService {

  constructor(@Inject('config') private config?: NgxAlertifyingConfig) { 
  }

  getConfiguration(): NgxAlertifyingConfig {
    return this.config || new NgxAlertifyingConfig();
  }
}
