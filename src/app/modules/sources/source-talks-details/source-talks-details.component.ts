import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GET_SOURCE_BY_ID, GET_SOURCE_BY_ID_SUCCESS } from '../sources.actions';
import { SourceDto } from '../sources.classes';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CREATE_COMMENT_SUCCESS } from '@app/modules/comments/comment.actions';

@Component({
  selector: 'app-source-talks-details',
  templateUrl: './source-talks-details.component.html',
  styleUrl: './source-talks-details.component.scss'
})
export class SourceTalksDetailsComponent implements OnInit {
  sourceId: string = '';
  sourceReview = new SourceDto();
  safeHtmlDescription!: SafeHtml;

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.sourceId = this.activatedRoute.snapshot.params['sourceId'];
    this.store.dispatch(GET_SOURCE_BY_ID({ sourceId: this.sourceId }));

    this.actions$.pipe(
      ofType(GET_SOURCE_BY_ID_SUCCESS, CREATE_COMMENT_SUCCESS)
    ).subscribe((response) => {
      switch (response.type) {
        case CREATE_COMMENT_SUCCESS.type:
          break;
        case GET_SOURCE_BY_ID_SUCCESS.type:
          this.sourceReview = response.source;
          const { htmlInfo, url } = response.source;
          this.safeHtmlDescription = htmlInfo ? this.sanitizeHtml(htmlInfo): '';
          this.store.dispatch(CHANGE_TITLE({ title: url }));
          this.setBreadCrumb(url);
          break;
      }
    })
  }

  setBreadCrumb(text: string) {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Sources' },
      { name: 'Talk' },
      { name: text }
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }


  private sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
