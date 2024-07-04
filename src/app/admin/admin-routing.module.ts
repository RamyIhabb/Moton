import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { AddNewPublisherComponent } from './components/add-new-publisher/add-new-publisher.component';
import { ControlBoardComponent } from './components/control-board/control-board.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { RequestNewBooksComponent } from './components/request-new-books/request-new-books.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  {
    path: '', component: AdminMainComponent, children: [
      { path: 'Add-Book', component: AddBooksComponent },
      { path: 'Add-category', component: AddCategoryComponent },
      { path: 'Add-event', component: AddNewEventComponent },
      { path: 'Add-publisher', component: AddNewPublisherComponent },
      { path: 'Control-bord', component: ControlBoardComponent },
      { path: 'Messages', component: MessagesComponent },
      { path: 'Publisher', component: PublishersComponent },
      { path: 'Request', component: RequestNewBooksComponent },
      { path: 'user-interFace', component: UserInterfaceComponent },
      { path: 'Users', component: UsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
