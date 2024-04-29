import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromCommonNames from './common-names.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonNamesEffects } from './common-names.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CommonNamesEffects]),
    StoreModule.forFeature(fromCommonNames.commonNameFeatureKey, fromCommonNames.reducer),
  ]
})
export class CommonNamesModule { }
