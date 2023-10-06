import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAlertifyingComponent } from './ngx-alertifying.component';

describe('NgxAlertifyingComponent', () => {
  let component: NgxAlertifyingComponent;
  let fixture: ComponentFixture<NgxAlertifyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAlertifyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAlertifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
