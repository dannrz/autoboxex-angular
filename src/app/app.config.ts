import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import AutoboxexPreset from './config/primeng/AutoboxexPreset';
import { apiInterceptor } from '@core/interceptors/api.interceptor';
import { environment } from '@env/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    providePrimeNG({
      theme: {
        preset: AutoboxexPreset,
      },
      license: environment.primeUIKey
    })
  ]
};