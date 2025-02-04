import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-updatewarehouse',
  templateUrl: './updatewarehouse.component.html',
  styleUrls: ['./updatewarehouse.component.scss']
})
export class UpdateWarehouseComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  warehouseId!: any;
  warehouseData!: any;

  ngOnInit(): void {
    this.warehouseId = this.route.snapshot.params['id'];
    console.log(this.warehouseId);

    // Fetch the warehouse details by ID from the API
    this.warehouseService.getById(this.warehouseId).subscribe((val: any) => {
      this.warehouseData = val;
      console.log(this.warehouseData);

      // Set form values with the fetched warehouse data
      this.warehouseForm.setValue(this.warehouseData);
    });
  }

  onSubmit() {
    // Submit the form data to update the warehouse
    this.warehouseService.updateData(this.warehouseForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/warehouselist');
    });
  }

  // Form group for updating the warehouse
  warehouseForm: FormGroup = new FormGroup({
    warehouseId: new FormControl(),
    warehouseName: new FormControl(),
    warehouseAddress: new FormControl(),
    capacity: new FormControl(),
    contactInfo: new FormControl(),
    status: new FormControl(),
    managerId: new FormControl()
  });
}
