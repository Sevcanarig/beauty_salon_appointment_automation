import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { mergeApplicationConfig, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

const finalConfig: ApplicationConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
});

bootstrapApplication(AppComponent, finalConfig)
  .catch((err) => console.error(err));
