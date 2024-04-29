import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GET_LAST_COMMENTS } from '@app/modules/comments/comment.actions';
import { CommentDto, CommentsQuery } from '@app/modules/comments/comment.classes';
import { lastCommentsList } from '@app/modules/comments/comments.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

enum Reference {
  STEROID = 'Steroid',
  SOURCE = 'Source',
}

enum Type {
  REVIEW = 'Review',
  COMMENT = 'Comment'
}

@Component({
  selector: 'app-recent-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-reviews.component.html',
  styleUrl: './recent-reviews.component.scss'
})
export class RecentReviewsComponent implements OnChanges {
  comments$: Observable<CommentDto[]>;
  @Input('type') type: string = '';
  @Input('reference') reference: string = '';
  
  constructor(private readonly store: Store) {
    this.comments$ = store.select(lastCommentsList);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type'] || changes['reference']) {
      const typeValue: Type = changes['type'] ? changes['type'].currentValue : this.type;
      const referenceValue: Reference = changes['reference'] ? changes['reference'].currentValue : this.reference;

      if (typeValue && referenceValue) {
        this.handleTypeChange(typeValue, referenceValue);
      }
    }
  }


  handleTypeChange(type: Type, reference: Reference): void {
    const query: CommentsQuery = {
      type,
      referenceType: reference,
      limit: 5
    };

    this.store.dispatch(GET_LAST_COMMENTS({ commentsQuery: query }));
  }
}
