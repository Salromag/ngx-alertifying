import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxAlertComponent } from './ngx-alertifying/ngx-alert.component';
import { NgxAlertifyingService } from './ngx-alertifying.service';
import { NgxAlertifyingConfig } from './shared/interfaces/ngx-alertifying-config.interface';
import { CONFIG } from './shared/injection-token/config-token';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgxAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxAlertComponent
  ],
  providers: []
})
export class NgxAlertifyingModule { 
  static forRoot(config: NgxAlertifyingConfig = new NgxAlertifyingConfig()): ModuleWithProviders<NgxAlertifyingModule>  {
    return {
      ngModule: NgxAlertifyingModule,
      providers: [ NgxAlertifyingService, { provide: CONFIG, useValue: config } ]
    };
  }
}
