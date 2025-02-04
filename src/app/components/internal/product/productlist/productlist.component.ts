import { Component } from '@angular/core';
import { ProductDTO, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
httpClient: any;
  apiURL: any;

constructor(private productService:ProductService){}


productList:ProductDTO[]=[];

  ngOnInit(): void {
    this.productService.getAll().subscribe((res:any) => {
      this.productList=res;
    })
  }



delete(id:any){
  this.productService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}
}
