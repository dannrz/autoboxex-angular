import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, tap, throwError } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth.service';
import { MessageModule } from 'primeng/message';

@Component({
  imports: [ReactiveFormsModule, InputTextModule, LabelModule, FloatLabelModule, MessageModule],
  selector: 'auth-login-form',
  templateUrl: './login-form.html',
})
export class LoginForm {
  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly service: AuthService = inject(AuthService);

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
        tap(() => console.log('Login attempt')),
        catchError((error) => {
          console.error('Login error', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}