import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  imports: [ReactiveFormsModule, InputTextModule, LabelModule, FloatLabelModule],
  selector: 'auth-login-form',
  templateUrl: './login-form.html',
})
export class LoginForm {
  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  protected readonly form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  public send() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}