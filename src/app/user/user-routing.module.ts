import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { EventsComponent } from './components/events/events.component';
import { RecentReleasesComponent } from './components/recent-releases/recent-releases.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { UserMainComponent } from './user-main/user-main.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [

  {
    path: '', component: UserMainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'connectus', component: ConnectUsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'recent', component: RecentReleasesComponent },
      { path: 'who', component: WhoAreWeComponent },
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
