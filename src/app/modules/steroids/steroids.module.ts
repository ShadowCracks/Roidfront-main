import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteroidsCyclesComponent } from './steroids-cycles/steroids-cycles.component';
import { SteroidsReviewsComponent } from './steroids-reviews/steroids-reviews.component';
import { SteroidsTalksComponent } from './steroids-talks/steroids-talks.component';
import { SteroidsTalksDetailsComponent } from './steroids-talks-details/steroids-talks-details.component';
import { SteroidsReviewsDetailsComponent } from './steroids-reviews-details/steroids-reviews-details.component';
import { SteroidsRoutingModule } from './steroids.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { SteroidsEffects } from './steroids.effects';
import { StoreModule } from '@ngrx/store';
import * as fromSteroids from './steroids.reducer';
import { TimeAgoPipe } from '@app/globals/pipes/time-ago.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RecentReviewsComponent } from '@app/_layout/shared/recent-reviews/recent-reviews.component';
import { SearchFilterComponent } from '@app/_layout/shared/search-filter/search-filter.component';
import { PaginationComponent } from '@app/_layout/shared/pagination/pagination.component';
import { CreatorDetailsComponent } from '@app/_layout/shared/creator-details/creator-details.component';
import { CommentsComponent } from '@app/_layout/shared/comments/comments.component';
@NgModule({
  declarations: [
    SteroidsCyclesComponent,
    SteroidsReviewsComponent,
    SteroidsTalksComponent,
    SteroidsTalksDetailsComponent,
    SteroidsReviewsDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromSteroids.steroidFeatureKey, fromSteroids.reducer),
    EffectsModule.forFeature([SteroidsEffects]),
    SteroidsRoutingModule,
    RecentReviewsComponent,
    CreatorDetailsComponent,
    CommentsComponent,
    PaginationComponent,
    SearchFilterComponent
  ]
})
export class SteroidsModule { }
