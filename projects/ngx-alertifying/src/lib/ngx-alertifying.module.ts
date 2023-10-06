import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxAlertifyingComponent } from './ngx-alertifying/ngx-alertifying.component';
import { NgxAlertifyingService } from './ngx-alertifying.service';
import { NgxAlertifyingConfig } from './shared/interfaces/ngx-alertifying-config.interface';



@NgModule({
  declarations: [
    NgxAlertifyingComponent
  ],
  imports: [
  ],
  exports: [
    NgxAlertifyingComponent
  ]
})
export class NgxAlertifyingModule { 
  static forRoot(config?: NgxAlertifyingConfig): ModuleWithProviders<NgxAlertifyingModule>  {
    return {
      ngModule: NgxAlertifyingModule,
      providers: [NgxAlertifyingService, {provide: 'config', useValue: config}]
    };
  }
}
