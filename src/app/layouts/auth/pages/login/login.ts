import { Component, signal, viewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { LoginFooter } from '@app/features/auth/components/login-footer/login-footer';
import { LoginForm } from '@app/features/auth/components/login-form/login-form';

@Component({
  imports: [CardModule, LoginFooter, LoginForm],
  templateUrl: './login.html',
})
export class Login {
  private readonly title = signal<string>('Autoboxex');
  private readonly loginForm = viewChild.required(LoginForm);

  public onLogin() {
    this.loginForm()?.send();
  }
}