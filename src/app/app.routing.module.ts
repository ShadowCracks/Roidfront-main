import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public/public-layout/public-layout.component';
import { SteroidsTalksComponent } from './modules/steroids/steroids-talks/steroids-talks.component';

export const routes: Routes = [
  { 
      path: '', 
      component: PublicLayoutComponent,
      children: [{
        path: '',
        component: SteroidsTalksComponent
      }]
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
