import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-steroids-talk",
  templateUrl: "./steroids-talk.component.html",
  styleUrls: ["./steroids-talk.component.css"],
})
export class SteroidsTalkComponent {
  talks: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getSteroidTalks().subscribe(
      (res) => {
        this.talks = res;
      },
      (error) => {
        console.log("getSteroidsReviews Errors--->", error);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigateByUrl(`/steroid-talk-inside/${id}`);
  }
}
