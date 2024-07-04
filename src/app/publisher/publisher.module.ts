import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { ControlBoardComponent } from './components/control-board/control-board.component';
import { EBooksComponent } from './components/e-books/e-books.component';



@NgModule({
  declarations: [
    ControlBoardComponent,
    EBooksComponent,

  ],
  imports: [
    CommonModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
