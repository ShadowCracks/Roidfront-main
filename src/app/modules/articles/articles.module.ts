import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticlesEffects } from './articles.effects';
import * as fromArticles from './articles.reducer';

@NgModule({
  declarations: [ArticlesListComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticlesEffects]),
    StoreModule.forFeature(fromArticles.articleFeatureKey, fromArticles.reducer),
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
