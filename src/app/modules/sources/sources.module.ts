import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesReviewsComponent } from './sources-reviews/sources-reviews.component';
import { SourcesTalksComponent } from './sources-talks/sources-talks.component';
import { SourcesRoutingModule } from './sources.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { SourcesEffects } from './sources.effects';
import { StoreModule } from '@ngrx/store';
import * as fromSources from './sources.reducer';
import { SourceReviewsDetailsComponent } from './source-reviews-details/source-reviews-details.component';
import { TimeAgoPipe } from '@app/globals/pipes/time-ago.pipe';
import { SourceTalksDetailsComponent } from './source-talks-details/source-talks-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecentReviewsComponent } from '@app/_layout/shared/recent-reviews/recent-reviews.component';
import { PaginationComponent } from '@app/_layout/shared/pagination/pagination.component';
import { CreatorDetailsComponent } from '@app/_layout/shared/creator-details/creator-details.component';
import { NewSubmissionsComponent } from '@app/_layout/shared/new-submissions/new-submissions.component';
import { CommentsComponent } from '@app/_layout/shared/comments/comments.component';

@NgModule({
  declarations: [
    SourcesReviewsComponent,
    SourceReviewsDetailsComponent,
    SourcesTalksComponent,
    SourceTalksDetailsComponent,
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    RecentReviewsComponent,
    CreatorDetailsComponent,
    PaginationComponent,
    NewSubmissionsComponent,
    CommentsComponent,
    ReactiveFormsModule,
    EffectsModule.forFeature([SourcesEffects]),
    StoreModule.forFeature(fromSources.sourceFeatureKey, fromSources.reducer),
    SourcesRoutingModule
  ]
})
export class SourcesModule { }
