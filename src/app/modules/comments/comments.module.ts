import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CommentsEffects } from './comments.effects';
import { StoreModule } from '@ngrx/store';
import * as fromComments from './comments.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CommentsEffects]),
    StoreModule.forFeature(fromComments.commentFeatureKey, fromComments.reducer),
  ]
})
export class CommentsModule { }
