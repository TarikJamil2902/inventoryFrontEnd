import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-createinventory',
  templateUrl: './createinventory.component.html',
  styleUrls: ['./createinventory.component.scss']
})
export class CreateinventoryComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic (if needed)
  }

  onSubmit() {
    this.inventoryService.add(this.inventoryForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/inventorylist'); // Adjust this route as needed
    });
  }

  inventoryForm: FormGroup = new FormGroup({
    inventoryId: new FormControl(),
    productId: new FormControl(),
    warehouseId: new FormControl(),
    quantityOnHand: new FormControl(),
    quantityAllocated: new FormControl(),
    quantityAvailable: new FormControl(),
   
  });
}
