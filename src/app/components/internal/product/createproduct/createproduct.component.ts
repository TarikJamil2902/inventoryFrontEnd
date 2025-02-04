import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service'; // Ensure this service exists

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if necessary
  }

  onSubmit() {
    this.productService.add(this.productForm.value).subscribe((res: any) => {
      console.log("Product created successfully");
      this.router.navigateByUrl('/product-list'); // Adjust route as needed
    });
  }

  productForm: FormGroup = new FormGroup({
    productId: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    size: new FormControl(),
    color: new FormControl(),
    brand: new FormControl(),
    unitPrice: new FormControl(),
    costPrice: new FormControl(),
    quantityInStock: new FormControl(),
    reorderLevel: new FormControl(),
    barcode: new FormControl(),
    status: new FormControl(),
    imageUrl: new FormControl(),
    categoryId: new FormControl(),
    supplierId: new FormControl()
  });
}
