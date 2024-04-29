import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"],
})
export class CommunityComponent {
  topics: any = [];
  sourceReviews: any = [];
  steroidReviews: any = [];
  groups: any = [];
  newsList: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getForumTopics().subscribe(
      (res) => {
        this.topics = res;
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.getSourceReviews(5, 0).subscribe(
      (res) => {
        this.sourceReviews = res;
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.getSteroidsReviews().subscribe(
      (res) => {
        this.steroidReviews = res;
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.getGroups().subscribe(
      (res) => {
        this.groups = res;
      },
      (error) => {
        console.log(error);
      }
    );
    this.apiService.getNewsList().subscribe(
      (res) => {
        this.newsList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToForums() {
    this.router.navigateByUrl(`/forums-topic-list`);
  }

  goToSource() {
    this.router.navigateByUrl(`/source-review`);
  }

  goToSteroids() {
    this.router.navigateByUrl(`/steroids-review`);
  }

  goToGroups() {
    this.router.navigateByUrl(`/groups`);
  }

  goToNews() {
    this.router.navigateByUrl(`/news-list`);
  }

  getDateFromTimestamp(timestamp: any) {
    const MONTHs = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date(timestamp * 1);
    return `${MONTHs[date.getMonth()]}, ${date.getFullYear()}`;
  }
}
