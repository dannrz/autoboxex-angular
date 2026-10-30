import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@env/environment';

export const SKIP_API_PREFIX = new HttpContextToken<boolean>(() => false);

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
  const skipPrefix = req.context.get(SKIP_API_PREFIX);

  req = req.clone({
    url: skipPrefix ? req.url : `${environment.api}${req.url}`,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(req);
};
