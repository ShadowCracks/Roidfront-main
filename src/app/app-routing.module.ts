import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/common/home/home.component";
import { SteroidReviewInsideComponent } from "./shared/components/steroid/steroid-review-inside/steroid-review-inside.component";
import { SteroidCyclesComponent } from "./shared/components/steroid/steroid-cycles/steroid-cycles.component";
import { SteroidsReviewComponent } from "./shared/components/steroid/steroids-review/steroids-review.component";
import { SteroidSourceReviewComponent } from "./shared/components/steroid/steroid-source-review/steroid-source-review.component";
import { SteroidsTalkComponent } from "./shared/components/steroid/steroids-talk/steroids-talk.component";
import { SteroidTalkInsideComponent } from "./shared/components/steroid/steroid-talk-inside/steroid-talk-inside.component";
import { SourceReviewComponent } from "./shared/components/source/source-review/source-review.component";
import { SourceTalkComponent } from "./shared/components/source/source-talk/source-talk.component";
import { SourceTalkInsideComponent } from "./shared/components/source/source-talk-inside/source-talk-inside.component";
import { SourceReviewInsideComponent } from "./shared/components/source/source-review-inside/source-review-inside.component";
import { CommunityComponent } from "./shared/components/community-forums/community/community.component";
import { GroupComponent } from "./shared/components/groups/group/group.component";
import { CombatSportsGroupsComponent } from "./shared/components/groups/combat-sports-groups/combat-sports-groups.component";
import { NewsListComponent } from "./shared/components/news/news-list/news-list.component";
import { NewsDetailsComponent } from "./shared/components/news/news-details/news-details.component";
import { CommunityPicsGalleryComponent } from "./shared/components/community-pics/community-pics-gallery/community-pics-gallery.component";
import { PicsInsideComponent } from "./shared/components/community-pics/pics-inside/pics-inside.component";
import { ForumsTopicListComponent } from "./shared/components/forums/forums-topic-list/forums-topic-list.component";
import { ForumsDetailsComponent } from "./shared/components/forums/forums-details/forums-details.component";
import { CreateAccountComponent } from "./shared/components/authentication/create-account/create-account.component";
import { ForgotPasswordComponent } from "./shared/components/authentication/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./shared/components/authentication/reset-password/reset-password.component";
import { SignInComponent } from "./shared/components/authentication/sign-in/sign-in.component";
import { MyAccountComponent } from "./shared/components/authentication/my-account/my-account.component";
import { AddSourceComponent } from "./shared/components/authentication/add-source/add-source.component";
import { AddSteroidsComponent } from "./shared/components/authentication/add-steroids/add-steroids.component";
import { BuyKarmaPointsComponent } from "./shared/components/authentication/buy-karma-points/buy-karma-points.component";

const routes: Routes = [
  { path: "", component: SteroidsReviewComponent },
  {
    path: "steroid-review-inside/:id",
    component: SteroidReviewInsideComponent,
  },
  { path: "steroid-cycles", component: SteroidCyclesComponent },
  { path: "steroids-review", component: SteroidsReviewComponent },
  { path: "steroid-source-review", component: SteroidSourceReviewComponent },
  { path: "steroids-talk", component: SteroidsTalkComponent },
  { path: "steroid-talk-inside/:id", component: SteroidTalkInsideComponent },
  { path: "source-review", component: SourceReviewComponent },
  { path: "source-talk", component: SourceTalkComponent },
  { path: "source-talk-inside/:id", component: SourceTalkInsideComponent },
  { path: "source-review-inside/:id", component: SourceReviewInsideComponent },
  { path: "community-forums", component: CommunityComponent },
  { path: "groups", component: GroupComponent },
  { path: "group-details/:id", component: CombatSportsGroupsComponent },
  { path: "news-list", component: NewsListComponent },
  { path: "news-details/:id", component: NewsDetailsComponent },
  { path: "community-pics-gallery", component: CommunityPicsGalleryComponent },
  { path: "pics-inside", component: PicsInsideComponent },
  { path: "forums-topic-list", component: ForumsTopicListComponent },
  { path: "forums-details/:id", component: ForumsDetailsComponent },
  { path: "create-account", component: CreateAccountComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "my-account", component: MyAccountComponent },
  { path: "add-source", component: AddSourceComponent },
  { path: "add-steroids", component: AddSteroidsComponent },
  { path: "buy-karma-points", component: BuyKarmaPointsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
