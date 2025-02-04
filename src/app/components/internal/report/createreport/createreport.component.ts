import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.scss']
})
export class CreatereportComponent implements OnInit {
  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.reportService.add(this.reportForm.value).subscribe((res: any) => {
      console.log("Created successfully");
      this.router.navigateByUrl('/categorylist');
    });
  }

  reportForm: FormGroup = new FormGroup({
    reportId: new FormControl(),
    reportType: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    generatedAt: new FormControl(),
    generatedByEmployeeId: new FormControl(),
    data: new FormControl(),
    createdByUserName: new FormControl()
  });
}
