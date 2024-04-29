import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";
import { SteroidsTalksComponent } from "./steroids-talks/steroids-talks.component";
import { SteroidsTalksDetailsComponent } from "./steroids-talks-details/steroids-talks-details.component";
import { SteroidsReviewsComponent } from "./steroids-reviews/steroids-reviews.component";
import { SteroidsReviewsDetailsComponent } from "./steroids-reviews-details/steroids-reviews-details.component";
import { SteroidsCyclesComponent } from "./steroids-cycles/steroids-cycles.component";

const steroidsRoutes = [{
    path: 'steroids',
    component: PublicLayoutComponent,
    children: [
        { path: 'talk', component: SteroidsTalksComponent },
        { path: 'talk/:steroidId', component: SteroidsTalksDetailsComponent },
        { path: 'review', component: SteroidsReviewsComponent },
        { path: 'review/:steroidId', component: SteroidsReviewsDetailsComponent },
        { path: 'cycles', component: SteroidsCyclesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(steroidsRoutes)],
  exports: [RouterModule]
})
export class SteroidsRoutingModule { }