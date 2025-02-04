import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-updatesupplier',
  templateUrl: './updatesupplier.component.html',
  styleUrls: ['./updatesupplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  supplierId!: any;
  supplierData!: any;

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.params['id'];
    console.log(this.supplierId);

    // Fetch the supplier details by ID from the API
    this.supplierService.getById(this.supplierId).subscribe((val: any) => {
      this.supplierData = val;
      console.log(this.supplierData);

      // Set form values with the fetched supplier data
      this.supplierForm.setValue(this.supplierData);
    });
  }

  onSubmit() {
    // Submit the form data to update the supplier
    this.supplierService.updateData(this.supplierForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/supplierlist');
    });
  }

  // Form group for updating the supplier
  supplierForm: FormGroup = new FormGroup({
    supplierId: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    paymentTerms: new FormControl(),
    supplierRating: new FormControl(),
    status: new FormControl()
  });
}
