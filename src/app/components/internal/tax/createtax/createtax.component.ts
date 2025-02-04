import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-createtax',
  templateUrl: './createtax.component.html',
  styleUrls: ['./createtax.component.scss']
})
export class CreatetaxComponent implements OnInit {
  constructor(private taxService: TaxService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.taxService.add(this.taxForm.value).subscribe((res: any) => {
      console.log("Created successfully");

      this.router.navigateByUrl('/categorylist');
    });
  }

  taxForm: FormGroup = new FormGroup({
    taxType: new FormControl(),
    rate: new FormControl(),
    description: new FormControl(),
    taxCategory: new FormControl(),
    status: new FormControl(),
    effectiveFrom: new FormControl(),
    effectiveTill: new FormControl()
  });
}
