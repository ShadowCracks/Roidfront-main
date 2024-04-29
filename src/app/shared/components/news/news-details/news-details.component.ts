import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.css"],
})
export class NewsDetailsComponent {
  private newsId: any = "";
  news: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get("id");
    this.apiService.getNews(this.newsId).subscribe(
      (res) => {
        const buf: any = res;
        this.news = buf[0];
      },
      (error) => {
        console.log("getNews Errors--->", error);
      }
    );
  }

  goToBack() {
    this.router.navigateByUrl(`/news-list`);
  }

  getDateFromTimestamp(timestamp: any) {
    const MONTHs = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let date = new Date(timestamp * 1);
    return `${date.getDate()}-${MONTHs[date.getMonth()]}-${date.getFullYear()}`;
  }
}
