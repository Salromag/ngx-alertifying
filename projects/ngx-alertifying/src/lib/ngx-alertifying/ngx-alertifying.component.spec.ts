import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAlertifyingComponent } from './ngx-alertifying.component';
import { NgxAlertifyingService } from '../ngx-alertifying.service';
import { NgxAlertifyingConfig, NgxAlertifyingModule } from '../../public-api';
import { CONFIG } from '../shared/injection-token/config-token';

describe('NgxAlertifyingComponent', () => {
  let component: NgxAlertifyingComponent;
  let fixture: ComponentFixture<NgxAlertifyingComponent>;
  let ngxAlertifyingService: NgxAlertifyingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgxAlertifyingModule.forRoot()],
      declarations: [ NgxAlertifyingComponent ],
      providers: [ 
        { provide: CONFIG, useValue: {} },
        {provide: NgxAlertifyingService }
      ]
    })
    .compileComponents();

    ngxAlertifyingService = TestBed.inject(NgxAlertifyingService);
    fixture = TestBed.createComponent(NgxAlertifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get configuration and retrieve alert color', () => {
    spyOn(ngxAlertifyingService, 'getConfiguration').and.returnValue(new NgxAlertifyingConfig())
    component.ngOnInit();
    expect()
  })
});
