// toast.service.ts
import { Injectable, Inject } from '@angular/core';
import { CONFIG } from '../injection-token/config-token';
import { NgxAlertifyingConfig } from '../interfaces/ngx-alertifying-config.interface';
import { ALERT_TYPE } from '../enums/alert-type.enum';
import { DEFAULT_DARNGER_COLOR, DEFAULT_INFO_COLOR, DEFAULT_SUCCESS_COLOR, DEFAULT_WARNING_COLOR } from '../properties';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private keyframes: string = `
    @keyframes slideInFromRight {
        from {
        transform: translateX(100%);
        }
        to {
        transform: translateX(0);
        }
    }`;

    constructor(@Inject(CONFIG) private config?: NgxAlertifyingConfig) {
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(this.keyframes));
        document.head.appendChild(styleElement);

        const container = document.createElement('div');
        // Add container styles
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '1rem';
        container.style.display = 'flex';
        container.style.flexDirection = 'column-reverse';
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
        // Toast style
        toast.style.position = 'relative';
        toast.style.top = '1.5rem';
        toast.style.transform = 'translateX(-20%)';
        toast.style.padding = '1rem 2rem'
        toast.style.borderRadius = '.8rem'
        toast.style.backgroundColor = '#fff';
        toast.style.border = '1px solid #f0f0f0'
        toast.style.borderLeft = `.8rem solid ${this.getColor(type)}`;
        toast.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        toast.style.animation = 'slideInFromRight 0.3s ease forwards';
        toast.style.marginBottom = '.5rem';
        toast.style.maxWidth = '400px'
        toast.style.minWidth = '400px'
        toast.style.wordWrap = 'break-word'

        document.getElementById('toast-container')?.appendChild(toast);
        setTimeout(() => {
            document.getElementById('toast-container')?.removeChild(toast);
        }, this.config?.toastDuration);
    }

    private getColor(type: ALERT_TYPE): string {
        const colorMapping: { [key in ALERT_TYPE]: string } = {
            [ALERT_TYPE.INFO]: this.config?.infoColor || DEFAULT_INFO_COLOR,
            [ALERT_TYPE.WARNING]: this.config?.warningColor || DEFAULT_WARNING_COLOR,
            [ALERT_TYPE.DANGER]: this.config?.dangerColor || DEFAULT_DARNGER_COLOR,
            [ALERT_TYPE.SUCCESS]: this.config?.successColor || DEFAULT_SUCCESS_COLOR
        };

        return colorMapping[type];
    }
}
