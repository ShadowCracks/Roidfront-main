import { NgModule } from "@angular/core";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "../../_layout/public/public-layout/public-layout.component";

const articlesRoutes = [{
    path: 'articles',
    component: PublicLayoutComponent,
    children: [
        { path: '', component: ArticlesListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }