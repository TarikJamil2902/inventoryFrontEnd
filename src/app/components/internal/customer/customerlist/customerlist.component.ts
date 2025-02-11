import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent{
 httpClient: any;
  apiURL: any;

constructor(private customerService:CustomerService){}


 customerList:Customer[]=[];

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res:any) => {
      this.customerList=res;
    })
  }



delete(id:any){
  this.customerService.remove(id).subscribe((res:any) => {
    console.log('Data delete');
    this.ngOnInit();
  })
}

// Function to handle report download on click
onDownloadReport(format: string): void {
  const url = `http://localhost:8080/download/${format}`;

  // Create an anchor tag dynamically and trigger a click event
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Download.${format}'; // Set default file name
  document.body.appendChild(link); // Append to DOM for click event to work
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up
}


}
