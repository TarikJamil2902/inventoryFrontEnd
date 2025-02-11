import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-creatediscount',
  templateUrl: './creatediscount.component.html',
  styleUrls: ['./creatediscount.component.scss']
})
export class CreatediscountComponent implements OnInit {

  constructor(
    private discountService: DiscountService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  discountForm: FormGroup = new FormGroup({
    discountId: new FormControl(),
    discountCode: new FormControl(),
    description: new FormControl(),
    discountType: new FormControl(),
    amount: new FormControl(),
    validFrom: new FormControl(),
    validUntil: new FormControl(),
    status: new FormControl('Active') // Default to 'Active'
  });

  ngOnInit(): void {
    // Initialize the form with any necessary data or perform other setup tasks
  }

  onSubmit() {
    // Submit the form data to create a new discount
    this.discountService.add(this.discountForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/discountlist'); // Redirect after successful submission
    });
  }
}
