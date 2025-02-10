import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
httpClient: any;
  apiURL: any;

constructor(private productService:ProductService,
  private categoryService : CategoryService,
      private supplierService : SupplierService,
){}


productList:any[]=[];
categoryList:any[]=[];
supplierList:any[]=[];

  ngOnInit(): void {
    this.productService.getAll().subscribe((res:any) => {
      this.productList=res;
    })
    this.categoryService.getAll().subscribe((res:any) => {
      this.categoryList=res;
    })
    this.supplierService.getAll().subscribe((res:any) => {
      this.supplierList=res;
    })
  }



delete(id:any){
  this.productService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
