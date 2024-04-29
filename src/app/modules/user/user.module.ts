import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './user.reducer';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsersRoutingModule } from './users.routing.module';


@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(fromUsers.featureKey, fromUsers.reducer),
  ]
})
export class UserModule { }
