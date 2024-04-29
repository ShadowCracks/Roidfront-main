import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SteroidsService } from "./steroids.service";
import { GET_STEROIDS, GET_STEROIDS_FAILURE, GET_STEROIDS_SUCCESS, GET_STEROID_BY_ID, GET_STEROID_BY_ID_FAILURE, GET_STEROID_BY_ID_SUCCESS } from "./steroids.actions";


@Injectable()
export class SteroidsEffects {
  constructor(private readonly actions$: Actions,
    private readonly steroidsService: SteroidsService) { }

    getSteroids$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_STEROIDS),
        mergeMap(_ => {
          return this.steroidsService.getSteroids()
            .pipe(
              map((steroids) => GET_STEROIDS_SUCCESS({ steroids })),
              catchError(error => of(GET_STEROIDS_FAILURE({ error })))
          )
        })
      )
    });

    getSteroidById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_STEROID_BY_ID),
        mergeMap(action => {
          return this.steroidsService.getSteroidById(action.steroidId)
            .pipe(
              map((steroid) => GET_STEROID_BY_ID_SUCCESS({ steroid })),
              catchError(error => of(GET_STEROID_BY_ID_FAILURE({ error })))
          )
        })
      )
    });
}