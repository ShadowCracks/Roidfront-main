import { APP_INITIALIZER, NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routing.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as appReducer from './app.reducer';
import { ArticlesModule } from "./modules/articles/articles.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CommunityModule } from "./modules/community/community.module";
import { GroupsModule } from "./modules/groups/groups.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SteroidsModule } from "./modules/steroids/steroids.module";
import { SourcesModule } from "./modules/sources/sources.module";
import { CommonNamesModule } from "./modules/common-names/common-names.module";
import { ManufacturersModule } from "./modules/manufacturers/manufacturers.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { UserModule } from "./modules/user/user.module";
import { CommentsModule } from "./modules/comments/comments.module";
import { ApplicationInitializer } from "./app.initializer";
import { AppRequestInterceptor } from "./app.request-interceptor";
import { TimeAgoPipe } from "./globals/pipes/time-ago.pipe";

export function APP_INIT(appService: ApplicationInitializer) {
  return () => appService.initializeApp();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ArticlesModule,
    AuthModule,
    CommunityModule,
    SteroidsModule,
    GroupsModule,
    SourcesModule,
    CommonNamesModule,
    ManufacturersModule,
    UserModule,
    CommentsModule,
    StoreModule.forRoot({ [appReducer.appFeatureKey]: appReducer.appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  schemas: [],
  providers: [
    ApplicationInitializer,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppRequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: APP_INIT,
      multi: true,
      deps: [ApplicationInitializer]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
