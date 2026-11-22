import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import AutoboxexPreset from './config/primeng/AutoboxexPreset';
import { apiInterceptor } from '@core/interceptors/api.interceptor';
import { environment } from '@env/environment';
import { DARK_MODE_CLASS, ThemeService } from '@core/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    provideAppInitializer(() => {
      inject(ThemeService);
    }),
    providePrimeNG({
      theme: {
        preset: AutoboxexPreset,
        options: {
          darkModeSelector: `.${DARK_MODE_CLASS}`,
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      },
      license: environment.primeUIKey
    })
  ]
};