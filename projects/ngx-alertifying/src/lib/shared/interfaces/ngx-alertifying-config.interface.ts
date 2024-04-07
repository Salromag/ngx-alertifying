/**
 * Define color configuration for alerts and the style
 */

import { ALERT_SYLES } from "../enums/alert-styles.enum";
import { DEFAULT_DARNGER_COLOR, DEFAULT_INFO_COLOR, DEFAULT_SUCCESS_COLOR, DEFAULT_TOAST_DURATION, DEFAULT_WARNING_COLOR } from "../properties";

export class NgxAlertifyingConfig {

    constructor(
        public infoColor: string = DEFAULT_INFO_COLOR,
        public dangerColor: string = DEFAULT_DARNGER_COLOR,
        public warningColor: string = DEFAULT_WARNING_COLOR,
        public successColor: string = DEFAULT_SUCCESS_COLOR,
        public style: ALERT_SYLES = ALERT_SYLES.MATERIAL,
        public toastDuration: number = DEFAULT_TOAST_DURATION
    ) {}
}