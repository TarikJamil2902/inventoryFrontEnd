import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-updatetax',
  templateUrl: './updatetax.component.html',
  styleUrls: ['./updatetax.component.scss']
})
export class UpdateTaxComponent implements OnInit {

  constructor(
    private taxService: TaxService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  taxId!: any;
  taxData!: any;

  ngOnInit(): void {
    this.taxId = this.route.snapshot.params['id'];
    console.log(this.taxId);

    // Fetch the tax details by ID from the API
    this.taxService.getById(this.taxId).subscribe((val: any) => {
      this.taxData = val;
      console.log(this.taxData);

      // Set form values with the fetched tax data
      this.taxForm.setValue(this.taxData);
    });
  }

  onSubmit() {
    // Submit the form data to update the tax
    this.taxService.updateData(this.taxForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/taxlist');
    });
  }

  // Form group for updating the tax
  taxForm: FormGroup = new FormGroup({
    taxId: new FormControl(),
    taxType: new FormControl(),
    rate: new FormControl(),
    description: new FormControl(),
    taxCategory: new FormControl(),
    isActive: new FormControl(),
    effectiveFrom: new FormControl(),
    effectiveTill: new FormControl()
  });
}
