import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { REGISTER, REGISTER_SUCCESS } from '../auth.actions';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      aboutMe: [''],
      birthDate: ['', Validators.required],
      weight: [null, [Validators.required, Validators.min(0)]],
      height: [null, [Validators.required, Validators.min(0)]],
      bodyFat: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });

    this.actions$.pipe(
      ofType(REGISTER_SUCCESS)
    ).subscribe(({loginResponse}) => {
      sessionStorage['token'] = loginResponse.token.accessToken;
      location.reload();
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;

      this.store.dispatch(REGISTER({ payload: formValues }));
    } else {
      console.error('Invalid Form');
    }
  }
}
