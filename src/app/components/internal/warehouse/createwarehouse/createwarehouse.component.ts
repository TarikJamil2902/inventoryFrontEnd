import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-createwarehouse',
  templateUrl: './createwarehouse.component.html',
  styleUrls: ['./createwarehouse.component.scss']
})
export class CreatewarehouseComponent implements OnInit {
  constructor(private warehouseService: WarehouseService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.warehouseService.add(this.warehouseForm.value).subscribe((res: any) => {
      console.log("Created successfully");

      this.router.navigateByUrl('/categorylist');
    });
  }

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
