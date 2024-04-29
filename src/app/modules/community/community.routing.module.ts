import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";
import { ForumsComponent } from "./forums/forums.component";

const communityRoutes = [{
    path: 'community',
    component: PublicLayoutComponent,
    children: [
        { path: 'forums', component: ForumsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(communityRoutes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }