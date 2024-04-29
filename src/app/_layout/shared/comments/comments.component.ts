import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CREATE_COMMENT, CREATE_COMMENT_SUCCESS, GET_COMMENTS } from '@app/modules/comments/comment.actions';
import { CommentDto, CommentsQuery } from '@app/modules/comments/comment.classes';
import { commentsList } from '@app/modules/comments/comments.selector';
import { IS_LOGGED } from '@app/modules/user/user.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  @Input('type') type: 'Review' | 'Comment' =  'Comment';
  @Input('referenceId') referenceId = '';
  @Input('reference') reference = '';

  commentsOrReviews$: Observable<CommentDto[]>;
  isLogged$: Observable<boolean>;

  commentForm!: FormGroup;
  showCommentBox: boolean = false;
  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private readonly actions$: Actions,
    private readonly router: Router
  ) {
    this.isLogged$ = store.select(IS_LOGGED);
    this.commentsOrReviews$ = store.select(commentsList);
  }

  ngOnInit(): void {
    const commentsQuery: CommentsQuery = {
      type: this.type,
      referenceId: this.referenceId
    };
    this.store.dispatch(GET_COMMENTS({ commentsQuery }));

    this.commentForm = this.fb.group({
      comments: ['', Validators.required],
      referenceId: [this.referenceId],
      type: [this.type],
      referenceType: [this.reference],
    });

    this.actions$.pipe(
      ofType(CREATE_COMMENT_SUCCESS)
    ).subscribe(_ => {
      this.showCommentBox = false;
      this.commentForm.reset({
        comments: '',
        referenceId: this.referenceId,
        type: this.type,
        referenceType: this.reference
      });
    })
  }

  onSubmitComment() {
    if (this.commentForm.valid) {
      const formValues = this.commentForm.value;

      this.store.dispatch(CREATE_COMMENT({ createComment: formValues }));
    } else {
      console.error('Invalid Form');
    }
  }

  enableCommentBox() {
    this.isLogged$.pipe(
      take(1)
    ).subscribe(result => {
      if (result) {
        this.showCommentBox = true;
      } else {
        this.router.navigate(['/auth/login']);
      }
    })
  }
}
