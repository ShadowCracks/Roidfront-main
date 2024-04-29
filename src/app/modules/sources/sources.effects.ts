import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SourcesService } from "./sources.service";
import { 
  GET_SOURCE_BY_ID, 
  GET_SOURCE_BY_ID_FAILURE, 
  GET_SOURCE_BY_ID_SUCCESS,
  GET_SOURCES,
  GET_SOURCES_FAILURE,
  GET_SOURCES_SUCCESS, 

} from "./sources.actions";


@Injectable()
export class SourcesEffects {
  constructor(private readonly actions$: Actions,
    private readonly sourcesService: SourcesService) { }

    getSources$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_SOURCES),
        mergeMap(action => {
          return this.sourcesService.getSources()
            .pipe(
              map((sources) => GET_SOURCES_SUCCESS({ sources })),
              catchError(error => of(GET_SOURCES_FAILURE({ error })))
          )
        })
      )
    });

    getSourceById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_SOURCE_BY_ID),
        mergeMap(action => {
          return this.sourcesService.getSourceById(action.sourceId)
            .pipe(
              map((source) => GET_SOURCE_BY_ID_SUCCESS({ source })),
              catchError(error => of(GET_SOURCE_BY_ID_FAILURE({ error })))
          )
        })
      )
    });
}