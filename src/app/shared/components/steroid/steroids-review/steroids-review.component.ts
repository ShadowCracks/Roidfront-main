import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-steroids-review",
  templateUrl: "./steroids-review.component.html",
  styleUrls: ["./steroids-review.component.css"],
})
export class SteroidsReviewComponent {
  steroidReviews: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getSteroidsReviews().subscribe(
      (res) => {
        this.steroidReviews = res;
      },
      (error) => {
        console.log("getSteroidsReviews Errors--->", error);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigateByUrl(`/steroid-review-inside/${id}`);
  }
}
