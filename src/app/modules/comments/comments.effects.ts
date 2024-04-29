import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { CommentsService } from "./comments.service";
import { CREATE_COMMENT, CREATE_COMMENT_FAILURE, CREATE_COMMENT_SUCCESS, GET_COMMENTS, GET_COMMENTS_FAILURE, GET_COMMENTS_SUCCESS, GET_LAST_COMMENTS, GET_LAST_COMMENTS_FAILURE, GET_LAST_COMMENTS_SUCCESS } from "./comment.actions";
import { CommentDto } from "./comment.classes";
import { Store, select } from "@ngrx/store";
import { LOGGED_USER } from "../user/user.selectors";

@Injectable()
export class CommentsEffects {
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly commentsService: CommentsService) { }

    createComment$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CREATE_COMMENT),
        withLatestFrom(this.store.pipe(select(LOGGED_USER))),
        mergeMap(([action, loggedInUser]) => {
          return this.commentsService.createComment(action.createComment)
            .pipe(
              map((comment) => {
                comment.user = loggedInUser;
                return CREATE_COMMENT_SUCCESS({ comment });
              }),
              catchError(error => of(CREATE_COMMENT_FAILURE({ error })))
          )
        })
      )
    });

    getLastComments$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_LAST_COMMENTS, GET_COMMENTS),
        mergeMap(action => {
          return this.commentsService.getComments(action.commentsQuery)
            .pipe(
              map((comments) => {
                if (action.type === GET_LAST_COMMENTS.type) {
                  return GET_LAST_COMMENTS_SUCCESS({ comments })
                } else {
                  return GET_COMMENTS_SUCCESS({ comments })
                }
              }),
              catchError(error => {
                if (action.type === GET_LAST_COMMENTS.type) {
                  return of(GET_LAST_COMMENTS_FAILURE({ error }))
                } else {
                  return of(GET_COMMENTS_FAILURE({ error }))
                }
              })
          )
        })
      )
    });
}