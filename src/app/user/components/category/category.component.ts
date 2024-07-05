import { AddCategoryComponent } from './../../../admin/components/add-category/add-category.component';
import { Component, OnInit } from '@angular/core';
import { CategorisService } from 'src/services/categoris.service';
import { UserApiService } from 'src/services/user-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  GetBook: any[] = [];  // Initialize as an array

  constructor(private _UserApiService: UserApiService, private _CategorisService: CategorisService) { }

  ArbicBooks: any = {};
  EnglishBooks: any = {};
  AllBooks: any = {};

  ngOnInit(): void {
    this._CategorisService.GetCategoris().subscribe({
      next: (Responce) => {
        console.log(Responce.data)
        this.ArbicBooks = Responce.data.filter((item: any) => item.language == "arabic")
        this.EnglishBooks = Responce.data.filter((item: any) => item.language == "english")

      }
    })
  }







}
