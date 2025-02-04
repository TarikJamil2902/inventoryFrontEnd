
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss']
})
export class UpdatecategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  categoryList! : Category;


  ngOnInit(): void {
    this.id= this.route.snapshot.params['Id']
    console.log(this.id);
    this.categoryService.getById(this.id).subscribe((val: any) => {
      this.categoryList = val;
      console.log(this.categoryList);

      this.categoryForm.setValue(this.categoryList)
    })
  }



  onSubmit() {
    this.categoryService.updateData(this.categoryForm.value).subscribe((res: any) => {


      this.router.navigateByUrl('/categorylist')
    })
  }



  categoryForm: FormGroup = new FormGroup({
    categoryId: new FormControl(),
    categoryName: new FormControl(),
    description: new FormControl(),
    status: new FormControl()
  });
}
