import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '@primeicons/angular/user';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  imports: [ButtonModule, User, ProgressSpinnerModule],
  selector: 'auth-login-footer',
  templateUrl: './login-footer.html',
})
export class LoginFooter {
  protected readonly login: OutputEmitterRef<void> = output<void>();
  public readonly isLoading = input(false);

  public loginStart(): void {
    this.login.emit();
  }
}