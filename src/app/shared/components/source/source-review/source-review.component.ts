import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-source-review",
  templateUrl: "./source-review.component.html",
  styleUrls: ["./source-review.component.css"],
})
export class SourceReviewComponent {
  sourceReviewArray: any = [];
  page = 0;
  record_limit = 10;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getSourceReviews(this.record_limit, this.page).subscribe(
      (res) => {
        console.log("getSourceReview--->", res);
        this.sourceReviewArray = res;
      },
      (error) => {
        console.log("getServiceTalks Errors--->", error);
      }
    );
  }

  changePage(pageNo: any) {
    if (pageNo <= 3) {
      this.page = pageNo;
      this.apiService.getSourceReviews(this.record_limit, this.page).subscribe(
        (res) => {
          console.log("getSourceReview--->", res);
          this.sourceReviewArray = res;
        },
        (error) => {
          console.log("getServiceTalks Errors--->", error);
        }
      );
    } else {
      // return false;
    }
  }

  routeToSourceReviewInside(sourceId: any) {
    this.router.navigateByUrl(`/source-review-inside/${sourceId}`);
  }

  routeToSourceTalk() {
    this.router.navigateByUrl(`/source-talk`);
  }
}
