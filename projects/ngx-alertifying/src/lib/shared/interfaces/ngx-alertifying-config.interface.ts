/**
 * Define color configuration for alerts and the style
 */

import { ALERT_SYLES } from "../enums/alert-styles.enum";

export class NgxAlertifyingConfig {

    constructor(
        public infoColor: string = '#3498db',
        public dangerColor: string = '#e74c3c',
        public warningColor: string = '#f39c12',
        public successColor: string = '#2ecc71',
        public style: ALERT_SYLES = ALERT_SYLES.MATERIAL,
    ) {}
}