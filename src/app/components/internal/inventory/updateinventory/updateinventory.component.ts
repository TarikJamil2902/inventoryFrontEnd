import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryDTO, InventoryService } from 'src/app/services/inventory.service';
 // Ensure the correct service is imported
 // Ensure the correct model is imported

@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.scss']
})
export class UpdateinventoryComponent implements OnInit {

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  inventoryData!: any;

  inventoryForm: FormGroup = new FormGroup({
    inventoryId: new FormControl(),
    productId: new FormControl(),
    warehouseId: new FormControl(),
    quantityOnHand: new FormControl(),
    quantityAllocated: new FormControl(),
    quantityAvailable: new FormControl()
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);
    this.inventoryService.getById(this.id).subscribe((val: any) => {
      this.inventoryData = val;
      console.log(this.inventoryData);
      this.inventoryForm.setValue(this.inventoryData);
    });
  }

  onSubmit() {
    this.inventoryService.updateData(this.inventoryForm.value).subscribe(() => {
      this.router.navigateByUrl('/inventorylist');
    });
  }
}
