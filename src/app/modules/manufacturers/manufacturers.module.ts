import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromManufacturers from './manufacturers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ManufacturersEffects } from './manufacturers.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ManufacturersEffects]),
    StoreModule.forFeature(fromManufacturers.manufacturerFeatureKey, fromManufacturers.reducer),
  ]
})
export class ManufacturersModule { }
