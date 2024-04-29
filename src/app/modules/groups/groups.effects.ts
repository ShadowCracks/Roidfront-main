import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { GroupsService } from "./groups.service";
import { 
  CREATE_GROUP, 
  CREATE_GROUP_FAILURE, 
  CREATE_GROUP_SUCCESS, 
  GET_GROUPS, 
  GET_GROUPS_FAILURE, 
  GET_GROUPS_SUCCESS 
} from "./groups.actions";

@Injectable()
export class GroupsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly groupsService: GroupsService) { }

    createGroup$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CREATE_GROUP),
        mergeMap(action => {
          return this.groupsService.createGroup(action.createGroup)
            .pipe(
              map((group) => {
                return CREATE_GROUP_SUCCESS({ group });
              }),
              catchError(error => of(CREATE_GROUP_FAILURE({ error })))
          )
        })
      )
    });

    getGroups$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_GROUPS),
        mergeMap(action => {
          return this.groupsService.getGroups()
            .pipe(
              map((groups) => GET_GROUPS_SUCCESS({ groups })),
              catchError(error => of(GET_GROUPS_FAILURE({ error })))
          )
        })
      )
    });
}