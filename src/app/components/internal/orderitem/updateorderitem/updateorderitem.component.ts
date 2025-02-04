import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
  // Adjust according to your actual service path

@Component({
  selector: 'app-updateorderitem',
  templateUrl: './updateorderitem.component.html',
  styleUrls: ['./updateorderitem.component.scss']
})
export class UpdateorderitemComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  orderItemList!: any;  // Adjust this according to your actual model

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);
    this.categoryService.getById(this.id).subscribe((val: any) => {
      this.orderItemList = val;
      console.log(this.orderItemList);

      // Populate the form with the existing order item data
      this.orderItemForm.setValue(this.orderItemList);
    });
  }

  onSubmit() {
    this.categoryService.updateData(this.orderItemForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/orderlist');
    });
  }

  // Define the form with required fields
  orderItemForm: FormGroup = new FormGroup({
    orderId: new FormControl(),
    productId: new FormControl(),
    quantity: new FormControl(),
    unitPrice: new FormControl(),
    totalPrice: new FormControl(),
    discount: new FormControl(),
    tax: new FormControl()
  });
}
