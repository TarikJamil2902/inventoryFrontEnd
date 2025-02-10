import { Router } from '@angular/router';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit{
  constructor(private categoryService: CategoryService, private router: Router) { }


  ngOnInit(): void {

  }

  onSubmit() {
    this.categoryService.add(this.categoryForm.value).subscribe((res: any) => {
      console.log("Created succesfully");

      this.router.navigateByUrl('/admin/categorylist')
    })
  }

  categoryForm: FormGroup = new FormGroup({
    
    categoryName: new FormControl(),
    description: new FormControl(),
    status: new FormControl()
  });

}
