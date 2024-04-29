import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.css"],
})
export class GroupComponent {
  groups: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getGroups().subscribe(
      (res) => {
        this.groups = res;
      },
      (error) => {
        console.log("getGroups Errors--->", error);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigateByUrl(`/group-details/${id}`);
  }
}
