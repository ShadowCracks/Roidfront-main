import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showHead: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false sign-in
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log('Event Object--->',event);
        if (event['url'] == '/create-account' || event['url'] == '/forgot-password' || event['url'] == '/reset-password' || event['url'] == '/sign-in') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }

}
