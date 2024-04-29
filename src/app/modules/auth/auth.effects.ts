import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "./auth.service";
import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, REGISTER, REGISTER_ERROR, REGISTER_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS } from "./auth.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { LoginResponseDto, UserDto } from "./auth.types";


@Injectable()
export class AuthenticationEffects {
  constructor(private readonly actions$: Actions,
    private readonly authenticationService: AuthenticationService) { }

    login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(LOGIN),
        mergeMap(action => {
          return this.authenticationService.login(action.payload)
            .pipe(
              map((loginResponse) => LOGIN_SUCCESS({ loginResponse })),
              catchError(error => of(LOGIN_ERROR({ error })))
          )
        })
      )
    });

    register$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(REGISTER),
        mergeMap(action => {
          return this.authenticationService.register(action.payload)
            .pipe(
              map((loginResponse) => REGISTER_SUCCESS({ loginResponse })),
              catchError(error => of(REGISTER_ERROR({ error })))
          )
        })
      )
    });

    forgotPassword$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(FORGOT_PASSWORD),
        mergeMap(action => {
          return this.authenticationService.forgotPassword(action.email)
            .pipe(
              map((result) => FORGOT_PASSWORD_SUCCESS()),
              catchError(error => of(FORGOT_PASSWORD_ERROR({ error })))
          )
        })
      )
    });

    resetPassword$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RESET_PASSWORD),
        mergeMap(action => {
          return this.authenticationService.resetPassword(action.payload, action.token)
            .pipe(
              map((result) => RESET_PASSWORD_SUCCESS()),
              catchError(error => of(RESET_PASSWORD_ERROR({ error })))
          )
        })
      )
    });
}