# ngx-alertifying

---

## Description

ngx-alertifying library is a valuable tool for developers seeking a straightforward and stylish method to display important messages within their Angular applications. Our alert message component provides instant feedback on actions, errors, or confirmations, enhancing user experience significantly.

## Key Features

- **Complete Customization:** Tailor alert messages to match your application perfectly by choosing colors, icons, and animations.
  
- **Versatile Alert Types:** Choose from various alert types, including information, warning, success, and danger, to suit different usage contexts.

- **Easy Integration:** Seamless integration into your Angular application. Start displaying alert messages in just a few minutes.

- **Responsive and Appealing:** Designed for seamless functionality across devices of all sizes, ensuring a consistent user experience on any screen.

- **Enhanced Accessibility:** Our alert messages are designed for easy readability and usability, catering to all users, including those with disabilities.

## Installation

```
npm install ngx-alertifying
```

## Alert Basic usage
```typescript
import { NgxAlertifyingModule } from 'ngx-alertifying';

@NgModule({
imports: [NgxAlertifyingModule],
// ...
})
export class YourModule { }
```

## Configuration
Module accepts also configuration for the colors and the style of the alert
```typescript
import { NgxAlertifyingModule } from 'ngx-alertifying';
// Color: use html colors like #fcfcfc
// style: ALERT_STYLE.MATERIAL - ALERT_STYLE.BOOTSTRAP

@NgModule({
imports: [NgxAlertifyingModule.forRoot({
    infoColor: '',  
    warningColor: '',
    dangerColor: '',
    successColor: '',
    style: ALERT_STYLE.MATERIAL
})],
//
})
export class YourModule { }
```

## Component usage example

```html
<ngx-alert [message]="'This is a info alert—check it out!'" [type]="typeInfo"></ngx-alert>

<ngx-alert [title]="'Hey, this is an alert title'" [message]="'This is a info alert—check it out!'" [type]="typeInfo"></ngx-alert>

<ngx-alert [message]="'This is a info alert—check it out!'" [type]="typeInfo" [showBackground]="true"></ngx-alert>

<ngx-alert [title]="'Hey, this is an alert title'" [message]="'This is a info alert—check it out!'" [type]="typeInfo" [showBackground]="true"></ngx-alert>

```

## Component visual look

### Example with no Background
![no_bg](https://github.com/Salromag/ngx-alertifying/assets/128465637/4d8a0ed1-3f1f-4efe-9a5e-32bd039191d1)

### Example with Background
![bg](https://github.com/Salromag/ngx-alertifying/assets/128465637/81505d6b-9c14-4f86-b70a-e60b0d7a6559)


## Toast Basic usage

## Configuration
Module accepts also configuration for the colors and the style of the alert
```typescript
import { NgxAlertifyingModule } from 'ngx-alertifying';

@NgModule({
imports: [NgxAlertifyingModule.forRoot({
    toastDuration: 3000
})],
//
})
export class YourModule { }
```
## Component usage example
```typescript

  import { ToastService } from 'ngx-alertifying';

  constructor(private toastService: ToastService){}

  addInfo(): void {
    this.toastService.addInfo('This is an info toast message!');
  }

  addError(): void {
    this.toastService.addError('This is an error toast message!');
  }

  addSuccess(): void {
    this.toastService.addSuccess('This is a success toast message!');
  }

  addWarning(): void {
    this.toastService.addWarning('This is a warning toast message!');
  }
```