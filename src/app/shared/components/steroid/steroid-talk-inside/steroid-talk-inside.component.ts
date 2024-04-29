import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-steroid-talk-inside",
  templateUrl: "./steroid-talk-inside.component.html",
  styleUrls: ["./steroid-talk-inside.component.css"],
})
export class SteroidTalkInsideComponent {
  private talkId: any = "";
  talk: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.talkId = this.route.snapshot.paramMap.get("id");
    this.apiService.getSteroidTalk(this.talkId).subscribe(
      (res) => {
        const buf: any = res;
        this.talk = buf[0];
      },
      (error) => {
        console.log("getSteroidReview Errors--->", error);
      }
    );
  }

  goToBack() {
    this.router.navigateByUrl(`/steroids-review`);
  }
}
