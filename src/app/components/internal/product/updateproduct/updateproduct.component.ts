import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
// Update with correct service

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  productData!: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    // Fetch the product by ID from the API
    this.productService.getById(this.id).subscribe((val: any) => {
      this.productData = val;
      console.log(this.productData);

      // Set form values with the fetched product data
      this.productForm.setValue(this.productData);
    });
  }

  onSubmit() {
    // Submit the form data to update the product
    this.productService.updateData(this.productForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/productlist');
    });
  }

  // Form group for the product update
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
    // imageUrl: new FormControl(),
    // categoryId: new FormControl(),
    // supplierId: new FormControl()
  });
}
