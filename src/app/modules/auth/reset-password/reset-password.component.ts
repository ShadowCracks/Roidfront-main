import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RESET_PASSWORD } from '../auth.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    const token = this.route.snapshot.paramMap.get('token') as string;
    if (this.resetPasswordForm.valid) {
      const formValues = this.resetPasswordForm.value;

      this.store.dispatch(RESET_PASSWORD({ payload: formValues, token }));
    } else {
      console.error('Invalid Form');
    }
  }
}
