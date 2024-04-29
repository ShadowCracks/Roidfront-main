import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";
import { GroupsComponent } from "./groups/groups.component";
import { GroupDetailsComponent } from "./group-details/group-details.component";

const groupsRoutes = [{
    path: 'groups',
    component: PublicLayoutComponent,
    children: [
        { path: '', component: GroupsComponent },
        { path: ':groupId', component: GroupDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(groupsRoutes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }