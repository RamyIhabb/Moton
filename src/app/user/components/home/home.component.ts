import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  GetBook: any[] = [];  // Initialize as an array

  constructor(private _UserApiService: UserApiService) { }

  ngOnInit(): void {
    this._UserApiService.listBook().subscribe({
      next: (Response) => {
        if (Response && Array.isArray(Response.data)) {
          console.log(Response.data);
          this.GetBook = Response.data;
          // if(Response.data.name==""){

          // this.GetBook = Response.data;

          // }else{
          //   this.GetBook = Response.data;
          // }


        } else {
          console.log('Data not found or not in expected format in Response');
        }
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });

  }
}
