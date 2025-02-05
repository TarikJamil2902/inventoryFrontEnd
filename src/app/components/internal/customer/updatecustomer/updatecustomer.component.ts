import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.scss']
})
export class UpdatecustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  customerList! : any;


  // ngOnInit(): void {
  //   this.id= this.route.snapshot.params['Id']
  //   console.log(this.id);
  //   this.customerService.getById(this.id).subscribe((val: any) => {
  //     this.customerList = val;
  //     console.log(this.customerList);

  //     this.customerForm.setValue(this.customerList)
  //   })
  // }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.customerService.getById(this.id).subscribe((val: any) => {
      this.customerList = val;

      // Convert roles to an array before updating the form
      const roleArray = Array.isArray(val.role) ? val.role : [val.role];

      this.customerForm.patchValue({
        ...val,
        role: roleArray
      });
    });
  }


  onSubmit() {
    this.customerService.updateData(this.customerForm.value).subscribe((res: any) => {


      this.router.navigateByUrl('/customerlist')
    })
  }



  customerForm: FormGroup = new FormGroup({
    customerId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    billingAddress: new FormControl(),
    shippingAddress: new FormControl(),
    loyaltyPoints: new FormControl(),
    customerType: new FormControl(),
    status: new FormControl()
  });

}
