import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/features/auth/services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const service: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return !service.isAuthenticated() || router.createUrlTree(['/']);
};