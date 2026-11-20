import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@app/features/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return service.isAuthenticated() || router.createUrlTree(['/login']);
};