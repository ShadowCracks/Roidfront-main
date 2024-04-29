import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-combat-sports-groups",
  templateUrl: "./combat-sports-groups.component.html",
  styleUrls: ["./combat-sports-groups.component.css"],
})
export class CombatSportsGroupsComponent {
  private groupId: any = "";
  group: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get("id");
    this.apiService.getGroup(this.groupId).subscribe(
      (res) => {
        const buf: any = res;
        this.group = buf[0];
      },
      (error) => {
        console.log("getGroup Errors--->", error);
      }
    );
  }

  goToBack() {
    this.router.navigateByUrl(`/groups`);
  }
}
