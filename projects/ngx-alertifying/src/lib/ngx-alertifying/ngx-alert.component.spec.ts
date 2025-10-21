import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAlertComponent } from './ngx-alert.component';
import { NgxAlertifyingService } from '../ngx-alertifying.service';
import { ALERT_SYLES, ALERT_TYPE, NgxAlertifyingConfig, NgxAlertifyingModule } from '../../public-api';
import { CONFIG } from '../shared/injection-token/config-token';

describe('NgxAlertifyingComponent', () => {
  let component: NgxAlertComponent;
  let fixture: ComponentFixture<NgxAlertComponent>;
  let ngxAlertifyingService: NgxAlertifyingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgxAlertifyingModule.forRoot()],
      declarations: [ NgxAlertComponent ],
      providers: [ 
        { provide: CONFIG, useValue: {} },
        {provide: NgxAlertifyingService }
      ]
    })
    .compileComponents();

    ngxAlertifyingService = TestBed.inject(NgxAlertifyingService);
    fixture = TestBed.createComponent(NgxAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.config = {
      infoColor: '#000',
      warningColor: '#ff0',
      dangerColor: '#f00',
      successColor: '#0f0',
      toastDuration: 3000,
      style: ALERT_SYLES.MATERIAL
    };
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get configuration and retrieve alert color', () => {
    spyOn(ngxAlertifyingService, 'getConfiguration').and.returnValue(new NgxAlertifyingConfig())
    component.ngOnInit();
    expect()
  });

  it('should set alertColor to infoColor when type is INFO', () => {
    component.type = ALERT_TYPE.INFO;
    component.getAlertColor();

    expect(component.alertColor).toEqual('#000');
  });

  it('should set alertColor to infoColor when type is DANGER', () => {
    component.type = ALERT_TYPE.DANGER;
    component.getAlertColor();

    expect(component.alertColor).toEqual('#f00');
  });

  it('should set alertColor to warningColor when type is WARNING', () => {
    component.type = ALERT_TYPE.WARNING;
    component.getAlertColor();
  
    expect(component.alertColor).toEqual('#ff0');
  });

  it('should set alertColor to successColor when type is SUCCESS', () => {  
    component.type = ALERT_TYPE.SUCCESS;
    component.getAlertColor();
  
    expect(component.alertColor).toEqual('#0f0');
  });

  // Background

  it('should set alertColor to dangerColor when type is INFO and showBackground is true', () => {
    component.type = ALERT_TYPE.INFO;
    component.showBackground = true;
    component.getColorHexARgba = jasmine.createSpy('getColorHexARgba');

    component.getAlertColor();

    expect(component.alertColor).toEqual('#000');
    expect(component.getColorHexARgba).toHaveBeenCalledWith('#000');
  });

  it('should set alertColor to dangerColor when type is DANGER and showBackground is true', () => {
    component.type = ALERT_TYPE.DANGER;
    component.showBackground = true;
    component.getColorHexARgba = jasmine.createSpy('getColorHexARgba');

    component.getAlertColor();

    expect(component.alertColor).toEqual('#f00');
    expect(component.getColorHexARgba).toHaveBeenCalledWith('#f00');
  });

  it('should set alertColor to dangerColor when type is WARNING and showBackground is true', () => {
    component.type = ALERT_TYPE.WARNING;
    component.showBackground = true;
    component.getColorHexARgba = jasmine.createSpy('getColorHexARgba');

    component.getAlertColor();

    expect(component.alertColor).toEqual('#ff0');
    expect(component.getColorHexARgba).toHaveBeenCalledWith('#ff0');
  });

  it('should set alertColor to dangerColor when type is SUCCESS and showBackground is true', () => {
    component.type = ALERT_TYPE.SUCCESS;
    component.showBackground = true;
    component.getColorHexARgba = jasmine.createSpy('getColorHexARgba');

    component.getAlertColor();

    expect(component.alertColor).toEqual('#0f0');
    expect(component.getColorHexARgba).toHaveBeenCalledWith('#0f0');
  });


  it('should set alertBackground with rgba color when valid colorHex is provided', () => {
    const colorHex = '#ff5733';
    component.getColorHexARgba(colorHex);
  
    const r = parseInt(colorHex.slice(1, 3), 16);
    const g = parseInt(colorHex.slice(3, 5), 16);
    const b = parseInt(colorHex.slice(5, 7), 16);
    const opacidad = 0.1;
    const expectedRgbaColor = `rgba(${r}, ${g}, ${b}, ${opacidad.toFixed(2)})`;
  
    expect(component.alertBackground).toEqual(expectedRgbaColor);
  });
});
