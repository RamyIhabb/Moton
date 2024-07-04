import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { ControlBoardComponent } from './components/control-board/control-board.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { RequestNewBooksComponent } from './components/request-new-books/request-new-books.component';
import { UsersComponent } from './components/users/users.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { AddNewPublisherComponent } from './components/add-new-publisher/add-new-publisher.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AdminMainComponent } from './admin-main/admin-main.component';


@NgModule({
  declarations: [
    NavAdminComponent,
    ControlBoardComponent,
    AddCategoryComponent,
    AddBooksComponent,
    RequestNewBooksComponent,
    UsersComponent,
    PublishersComponent,
    AddNewPublisherComponent,
    AddNewEventComponent,
    UserInterfaceComponent,
    MessagesComponent,
    AdminMainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
