// toast.service.ts
import { Injectable, Inject } from '@angular/core';
import { CONFIG } from '../injection-token/config-token';
import { NgxAlertifyingConfig } from '../interfaces/ngx-alertifying-config.interface';
import { ALERT_TYPE } from '../enums/alert-type.enum';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(@Inject(CONFIG) private config: NgxAlertifyingConfig) {
        const container = document.createElement('div');
        container.classList.add('toast-container');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    addInfo(message: string): void {
        this.addToast(message, ALERT_TYPE.INFO);
    }

    addError(message: string): void {
        this.addToast(message, ALERT_TYPE.DANGER);
    }

    addSuccess(message: string): void {
        this.addToast(message, ALERT_TYPE.SUCCESS);
    }

    addWarning(message: string): void {
        this.addToast(message, ALERT_TYPE.WARNING);
    }

    private addToast(message: string, type: ALERT_TYPE): void {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;
        toast.style.borderLeft = `.8rem solid ${this.getColor(type)}`;
        document.getElementById('toast-container')?.appendChild(toast);
        setTimeout(() => {
            document.getElementById('toast-container')?.removeChild(toast);
        }, this.config?.toastDuration);
    }

    private getColor(type: ALERT_TYPE): string {
        const colorMapping: { [key in ALERT_TYPE]: string } = {
            [ALERT_TYPE.INFO]: this.config.infoColor,
            [ALERT_TYPE.WARNING]: this.config.warningColor,
            [ALERT_TYPE.DANGER]: this.config.dangerColor,
            [ALERT_TYPE.SUCCESS]: this.config.successColor
        };

        return colorMapping[type] || this.config.infoColor;
    }
}
