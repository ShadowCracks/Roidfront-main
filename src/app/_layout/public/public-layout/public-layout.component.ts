import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from '../title/title.component';
import { BreadCrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, TitleComponent, BreadCrumbComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
