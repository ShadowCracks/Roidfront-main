import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonNamesService } from "./common-names.service";
import { GET_COMMON_NAMES, GET_COMMON_NAMES_FAILURE, GET_COMMON_NAMES_SUCCESS } from "./common-names.actions";


@Injectable()
export class CommonNamesEffects {
  constructor(private readonly actions$: Actions,
    private readonly commonNamesService: CommonNamesService) { }

    getCommonNames$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_COMMON_NAMES),
        mergeMap(action => {
          return this.commonNamesService.getCommonNames()
            .pipe(
              map((commonNames) => GET_COMMON_NAMES_SUCCESS({ commonNames })),
              catchError(error => of(GET_COMMON_NAMES_FAILURE({ error })))
          )
        })
      )
    });
}