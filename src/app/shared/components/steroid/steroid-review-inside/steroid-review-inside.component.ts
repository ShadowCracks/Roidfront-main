import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-steroid-review-inside",
  templateUrl: "./steroid-review-inside.component.html",
  styleUrls: ["./steroid-review-inside.component.css"],
})
export class SteroidReviewInsideComponent {
  private reviewId: any = "";
  review: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get("id");
    this.apiService.getSteroidReview(this.reviewId).subscribe(
      (res) => {
        const buf: any = res;
        this.review = buf[0];
      },
      (error) => {
        console.log("getSteroidReview Errors--->", error);
      }
    );
  }

  goToBack() {
    this.router.navigateByUrl(`/steroids-review`);
  }

  getScore(score: any) {
    return Number(score).toFixed(1);
  }
}
