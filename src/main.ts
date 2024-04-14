import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './1-app/app.config';
import { AppComponent } from './1-app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
