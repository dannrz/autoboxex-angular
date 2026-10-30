import { Component, output, OutputEmitterRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '@primeicons/angular/user';

@Component({
  imports: [ButtonModule, User],
  selector: 'auth-login-footer',
  templateUrl: './login-footer.html',
})
export class LoginFooter {
  protected readonly login: OutputEmitterRef<void> = output<void>();
}