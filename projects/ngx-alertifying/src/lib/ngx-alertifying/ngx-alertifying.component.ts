import { Component, OnInit, Input } from '@angular/core';
import { ALERT_TYPE } from '../../public-api';
import { NgxAlertifyingService } from '../ngx-alertifying.service';
import { NgxAlertifyingConfig } from '../shared/interfaces/ngx-alertifying-config.interface';

@Component({
  selector: 'ngx-alertifying',
  templateUrl: './ngx-alertifying.component.html',
  styleUrls: ['./ngx-alertifying.component.scss']
})
export class NgxAlertifyingComponent implements OnInit {
  @Input() message: string;
  @Input() title: string;
  @Input() type: ALERT_TYPE;
  @Input() showBackground: boolean = false;

  config: NgxAlertifyingConfig;
  alertColor: string;
  alertBackground: string = '#fff';

  constructor(private ngxAlertifying: NgxAlertifyingService) { }

  ngOnInit(): void {
    this.config = this.ngxAlertifying.getConfiguration();
    this.getAlertColor();
  }

  getAlertColor(): void {
    const colorMapping: { [key in ALERT_TYPE]: string } = {
      [ALERT_TYPE.INFO]: this.config.infoColor,
      [ALERT_TYPE.WARNING]: this.config.warningColor,
      [ALERT_TYPE.DANGER]: this.config.dangerColor,
      [ALERT_TYPE.SUCCESS]: this.config.successColor
    };

    this.alertColor = colorMapping[this.type] || this.config.infoColor;
    if (this.showBackground) this.getColorHexARgba(this.alertColor);
  }

  getColorHexARgba(colorHex: string): void {
    const opacidad: number = 0.1;
    const r: number = parseInt(colorHex.slice(1, 3), 16);
    const g: number = parseInt(colorHex.slice(3, 5), 16);
    const b: number = parseInt(colorHex.slice(5, 7), 16);

    this.alertBackground = `rgba(${r}, ${g}, ${b}, ${opacidad.toFixed(2)})`;
  }
}
