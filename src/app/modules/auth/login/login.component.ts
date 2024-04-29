import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN, LOGIN_SUCCESS } from '../auth.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  animations: [],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private readonly actions$: Actions
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.actions$.pipe(
      ofType(LOGIN_SUCCESS)
    ).subscribe(result => {
      sessionStorage['token'] = result.loginResponse.token.accessToken;
      location.reload();
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;

      this.store.dispatch(LOGIN({ payload: formValues }));
    } else {
      console.error('Invalid Form');
    }
  }
}
