import { Component } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.scss']
})
export class ListcategoryComponent {
  httpClient: any;
  apiURL: any;

constructor(private categoryService:CategoryService){}


 categoryList:Category[]=[];

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res:any) => {
      this.categoryList=res;
    })
  }



delete(id:any){
  this.categoryService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
