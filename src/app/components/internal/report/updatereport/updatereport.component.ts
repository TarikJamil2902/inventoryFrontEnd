import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
// Update with correct service path

@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.scss']
})
export class UpdateReportComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  reportData!: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    console.log(this.id);

    // Fetch the report by ID from the API
    this.reportService.getById(this.id).subscribe((val: any) => {
      this.reportData = val;
      console.log(this.reportData);

      // Set form values with the fetched report data
      this.reportForm.setValue(this.reportData);
    });
  }

  onSubmit() {
    // Submit the form data to update the report
    this.reportService.updateData(this.reportForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/reportlist');
    });
  }

  // Form group for updating the report
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
