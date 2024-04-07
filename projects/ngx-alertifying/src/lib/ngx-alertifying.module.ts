import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxAlertifyingComponent } from './ngx-alertifying/ngx-alertifying.component';
import { NgxAlertifyingService } from './ngx-alertifying.service';
import { NgxAlertifyingConfig } from './shared/interfaces/ngx-alertifying-config.interface';
import { CONFIG } from './shared/injection-token/config-token';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgxAlertifyingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxAlertifyingComponent
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
