import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";
import { SourcesTalksComponent } from "./sources-talks/sources-talks.component";
import { SourceTalksDetailsComponent } from "./source-talks-details/source-talks-details.component";
import { SourcesReviewsComponent } from "./sources-reviews/sources-reviews.component";
import { SourceReviewsDetailsComponent } from "./source-reviews-details/source-reviews-details.component";
const sourcesRoutes = [{
    path: 'sources',
    component: PublicLayoutComponent,
    children: [
        { path: 'talk', component: SourcesTalksComponent },
        { path: 'talk/:sourceId', component: SourceTalksDetailsComponent },
        { path: 'review', component: SourcesReviewsComponent },
        { path: 'review/:sourceId', component: SourceReviewsDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(sourcesRoutes)],
  exports: [RouterModule]
})
export class SourcesRoutingModule { }