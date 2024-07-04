import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { HomeComponent } from './components/home/HomeComponent';
import { RecentReleasesComponent } from './components/recent-releases/recent-releases.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { EventsComponent } from './components/events/events.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { UserMainComponent } from './user-main/user-main.component';



@NgModule({
  declarations: [
    NavUserComponent,
    HomeComponent,
    RecentReleasesComponent,
    AuthorsComponent,
    WhoAreWeComponent,
    EventsComponent,
    ConnectUsComponent,
    UserMainComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
