import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-createsupplier',
  templateUrl: './createsupplier.component.html',
  styleUrls: ['./createsupplier.component.scss']
})
export class CreatesupplierComponent implements OnInit {
  constructor(private supplierService: SupplierService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.supplierService.add(this.supplierForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/admin/supplierlist');
    });
  }

  supplierForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    paymentTerms: new FormControl(),
    supplierRating: new FormControl(),
    status: new FormControl()
  });
}
