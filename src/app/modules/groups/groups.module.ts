import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { GroupsRoutingModule } from './groups.routing.module';
import { GroupDetailsComponent } from './group-details/group-details.component';
import * as fromGroups from './groups.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GroupsEffects } from './groups.effects';

@NgModule({
  declarations: [GroupsComponent, GroupDetailsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GroupsEffects]),
    StoreModule.forFeature(fromGroups.groupFeatureKey, fromGroups.reducer),
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
