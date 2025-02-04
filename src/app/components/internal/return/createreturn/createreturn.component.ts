import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReturnService } from 'src/app/services/return.service';

@Component({
  selector: 'app-createreturn',
  templateUrl: './createreturn.component.html',
  styleUrls: ['./createreturn.component.scss']
})
export class CreatereturnComponent implements OnInit {
  constructor(private returnService: ReturnService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.returnService.add(this.returnForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/categorylist');
    });
  }

  returnForm: FormGroup = new FormGroup({
    returnId: new FormControl(),
    customerOrderId: new FormControl(),
    supplierReturnId: new FormControl(),
    reasonForReturn: new FormControl(),
    returnDate: new FormControl(),
    returnStatus: new FormControl(),
    amountRefunded: new FormControl(),
    returnType: new FormControl(),
    refundMethod: new FormControl(),
    quantity: new FormControl()
  });
}
