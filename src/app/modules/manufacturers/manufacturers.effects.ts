import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ManufacturersService } from "./manufacturers.service";
import { GET_MANUFACTURERS, GET_MANUFACTURERS_FAILURE, GET_MANUFACTURERS_SUCCESS } from "./manufacturers.actions";


@Injectable()
export class ManufacturersEffects {
  constructor(private readonly actions$: Actions,
    private readonly manufacturersService: ManufacturersService) { }

    getManufacturers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_MANUFACTURERS),
        mergeMap(action => {
          return this.manufacturersService.getManufacturers()
            .pipe(
              map((manufacturers) => GET_MANUFACTURERS_SUCCESS({ manufacturers })),
              catchError(error => of(GET_MANUFACTURERS_FAILURE({ error })))
          )
        })
      )
    });
}