import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, tap, throwError } from 'rxjs';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, InputTextModule, LabelModule, FloatLabelModule, MessageModule, ToastModule],
  providers: [MessageService],
  selector: 'auth-login-form',
  templateUrl: './login-form.html',
})
export class LoginForm {
  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly service: AuthService = inject(AuthService);
  private readonly toast: MessageService = inject(MessageService);
  private readonly router: Router = inject(Router);

  protected readonly form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  protected isInvalid(control: 'username' | 'password'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  public send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.service.login(this.form.getRawValue())
      .pipe(
        tap(data => this.handleLoginSuccess(data)),
        catchError((error) => {
          this.toast.add({ severity: 'error', summary: 'Error al iniciar sesión', detail: 'Credenciales incorrectas, por favor intente nuevamente.', life: 3000 });
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  private handleLoginSuccess(data: LoginResponse): void {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem("expires_at", data.expires_at);
    localStorage.setItem('user', JSON.stringify(data.user));

    this.router.navigate(['home']); // Redirect to the home page after successful login
  }
}