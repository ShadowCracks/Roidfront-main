import { ActivatedRoute } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { GET_CURRENT_USER, GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_SUCCESS } from "./modules/user/user.actions";
import { Injectable } from "@angular/core";
import { take } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApplicationInitializer {
  constructor(
    private readonly action$: Actions,
    private readonly store: Store,
  ) {}

  initializeApp(): Promise<void> {
    return new Promise((resolve: Function) => {
      const token = sessionStorage['token'];
  
      if (token) {
        this.store.dispatch(GET_CURRENT_USER());
        this.action$.pipe(
          ofType(GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAILURE),
          take(1)
        ).subscribe(_ => {
          resolve();
        })
      } else {
        resolve();
      }
      
    })
  }
}