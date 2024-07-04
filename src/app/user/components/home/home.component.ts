
import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _UserApiService: UserApiService,) { }

  GetBook: any = {};



  ngOnInit(): void {

    this._UserApiService.listBook().subscribe({
      next: (Response) => {
        // console.log(Response.data.bookName);
        if (Response && Response.data) {
          console.log(Response.data);
          this.GetBook = Response.data;

        } else {
          console.log('Data not found in Response');
        }
      }
    })
    console.log("ramy");
  }






}
