import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-forums-topic-list",
  templateUrl: "./forums-topic-list.component.html",
  styleUrls: ["./forums-topic-list.component.css"],
})
export class ForumsTopicListComponent {
  topics: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getForumTopics().subscribe(
      (res) => {
        this.topics = res;
      },
      (error) => {
        console.log("getForumTopics Errors--->", error);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigateByUrl(`/forums-details/${id}`);
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
