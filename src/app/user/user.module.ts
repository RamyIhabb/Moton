import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { RecentReleasesComponent } from './components/recent-releases/recent-releases.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { EventsComponent } from './components/events/events.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { UserMainComponent } from './user-main/user-main.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { EventsDetalisComponent } from './components/events-detalis/events-detalis.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    NavUserComponent,
    HomeComponent,
    RecentReleasesComponent,
    CategoryComponent,
    WhoAreWeComponent,
    EventsComponent,
    ConnectUsComponent,
    UserMainComponent,
    BookDetailsComponent,
    EventsDetalisComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
