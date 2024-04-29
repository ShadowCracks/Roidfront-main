import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UsersService } from "./users.service";
import { 
  GET_CURRENT_USER, 
  GET_CURRENT_USER_FAILURE, 
  GET_CURRENT_USER_SUCCESS 
} from "./user.actions";


@Injectable()
export class UsersEffects {
  constructor(private readonly actions$: Actions,
    private readonly usersService: UsersService) { }

    getLoggedUser$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_CURRENT_USER),
        mergeMap(action => {
          return this.usersService.getUserData()
            .pipe(
              map((user) => GET_CURRENT_USER_SUCCESS({ user })),
              catchError(error => of(GET_CURRENT_USER_FAILURE({ error })))
          )
        })
      )
    });
}