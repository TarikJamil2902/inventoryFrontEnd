import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountDTO, DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-updatediscount',
  templateUrl: './updatediscount.component.html',
  styleUrls: ['./updatediscount.component.scss']
})
export class UpdatediscountComponent implements OnInit {

  constructor(
    private discountService: DiscountService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  discountList! : DiscountDTO;


  ngOnInit(): void {
    this.id= this.route.snapshot.params['Id']
    console.log(this.id);
    this.discountService.getById(this.id).subscribe((val: any) => {
      this.discountList = val;
      console.log(this.discountList);

      this.discountForm.setValue(this.discountList)
    })
  }



  onSubmit() {
    this.discountService.updateData(this.discountForm.value).subscribe((res: any) => {


      this.router.navigateByUrl('/discountlist')
    })
  }



  discountForm: FormGroup = new FormGroup({
    discountId: new FormControl(),
    discountCode: new FormControl(),
    description: new FormControl(),
    discountType: new FormControl(),
    amount: new FormControl(),
    validFrom: new FormControl(),
    validUntil: new FormControl(),
    status: new FormControl()
  });

}
