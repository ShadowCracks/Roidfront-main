import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const usersRoutes = [{
    path: 'user',
    component: PublicLayoutComponent,
    children: [
        { path: 'dashboard', component: UserDashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }