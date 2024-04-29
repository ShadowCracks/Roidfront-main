import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-steroid-cycles",
  templateUrl: "./steroid-cycles.component.html",
  styleUrls: ["./steroid-cycles.component.css"],
})
export class SteroidCyclesComponent {
  cycles: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getSteroidCycles().subscribe(
      (res) => {
        this.cycles = res;
      },
      (error) => {
        console.log("getSteroidsReviews Errors--->", error);
      }
    );
  }

  goToDetails() {
    this.router.navigateByUrl(`/steroid-source-review`);
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
