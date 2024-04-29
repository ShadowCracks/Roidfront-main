import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-source-review-inside",
  templateUrl: "./source-review-inside.component.html",
  styleUrls: ["./source-review-inside.component.css"],
})
export class SourceReviewInsideComponent {
  private reviewId: any = "";
  review: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get("id");
    this.apiService.getSourceReview(this.reviewId).subscribe(
      (res) => {
        console.log("getSourceReview--->", res);
        const buf: any = res;
        this.review = buf[0];
      },
      (error) => {
        console.log("getServiceTalks Errors--->", error);
      }
    );
  }

  goToBack() {
    this.router.navigateByUrl(`/source-review`);
  }
}
