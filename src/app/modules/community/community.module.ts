import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumsComponent } from './forums/forums.component';
import { PicsComponent } from './pics/pics.component';
import { CommunityRoutingModule } from './community.routing.module';



@NgModule({
  declarations: [
    ForumsComponent,
    PicsComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
