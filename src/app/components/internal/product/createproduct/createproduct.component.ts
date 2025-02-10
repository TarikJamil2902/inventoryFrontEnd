import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service'; // Ensure this service exists
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private categoryService : CategoryService,
    private supplierService : SupplierService,


     private router: Router) { }

     categorylist: any[] = [];
     supplierlist: any[] = [];

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res: any) => {
      this.categorylist = res;
    });

    this.supplierService.getAll().subscribe((res: any) => {
      this.supplierlist = res;
    });
  }

  onSubmit() {
    console.log(this.productForm.value);

    this.productService.add(this.productForm.value).subscribe((res: any) => {
      console.log("Product created successfully");
      this.router.navigateByUrl('/admin/productlist'); // Adjust route as needed
    });
  }

  productForm: FormGroup = new FormGroup({

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
