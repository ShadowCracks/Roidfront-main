import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/shared/services/api.service";
import { CommonService } from "src/app/shared/services/common.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  collapsed = true;
  isLogged = false;
  activeNav = "";

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("userDetails")) {
      this.isLogged = true;
    }

    this.commonService.isLoggedIn.subscribe(
      (message) => (this.isLogged = message)
    );
  }

  logout() {
    localStorage.removeItem("userDetails");
    this.isLogged = false;
  }

  goToPage(page: any) {
    this.router.navigateByUrl(`/${page}`);
    this.activeNav = "";
  }

  setActiveNav(nav: any) {
    if (this.activeNav == "") {
      this.activeNav = nav;
    } else {
      this.activeNav = "";
    }
  }
}
