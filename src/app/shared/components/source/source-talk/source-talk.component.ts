import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-source-talk",
  templateUrl: "./source-talk.component.html",
  styleUrls: ["./source-talk.component.css"],
})
export class SourceTalkComponent {
  sourceTalkArray: any = [];
  page = 0;
  record_limit = 14;
  steroidReviews: any = [];
  recentSteroidReviews: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getSourceTalks(this.record_limit, this.page).subscribe(
      (res) => {
        this.sourceTalkArray = res;
      },
      (error) => {
        console.log("getServiceTalks Errors--->", error);
      }
    );

    this.apiService.getSteroidsReviewComments().subscribe(
      (res) => {
        this.recentSteroidReviews = res;
      },
      (error) => {
        console.log("getSteroidsReviewComments Errors--->", error);
      }
    );

    this.apiService.getSteroidsReviews().subscribe(
      (res) => {
        this.steroidReviews = res;
      },
      (error) => {
        console.log("getSteroidsReviews Errors--->", error);
      }
    );
  }

  changePage(pageNo: any) {
    if (pageNo <= 3) {
      this.page = pageNo;
      this.apiService.getSourceTalks(this.record_limit, this.page).subscribe(
        (res) => {
          console.log("getServiceTalks--->", res);
          this.sourceTalkArray = res;
        },
        (error) => {
          console.log("getServiceTalks Errors--->", error);
        }
      );
    } else {
      // return false;
    }
  }

  routeToSourceTalkInside(sourceId: any) {
    this.router.navigateByUrl(`/source-talk-inside/${sourceId}`);
  }

  routeToSourceReview() {
    this.router.navigateByUrl(`/source-review`);
  }
}
