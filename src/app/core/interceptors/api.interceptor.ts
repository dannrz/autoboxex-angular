import { inject } from '@angular/core';
import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { AuthService } from '@app/features/auth/services/auth.service';

export const SKIP_API_PREFIX = new HttpContextToken<boolean>(() => false);

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const auth: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const token = auth.getToken();
  const skipPrefix = req.context.get(SKIP_API_PREFIX);

  req = req.clone({
    url: skipPrefix ? req.url : `${environment.api}${req.url}`,
    setHeaders: token && !skipPrefix ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized && token) {
        auth.logout();
        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );
};
