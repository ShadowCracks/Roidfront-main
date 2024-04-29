import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"],
})
export class NewsListComponent {
  newsList: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getNewsList().subscribe(
      (res) => {
        this.newsList = res;
      },
      (error) => {
        console.log("getNewsList Errors--->", error);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigateByUrl(`/news-details/${id}`);
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
