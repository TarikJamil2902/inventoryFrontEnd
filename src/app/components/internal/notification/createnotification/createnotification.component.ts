import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service'; // Make sure to import your service

@Component({
  selector: 'app-createnotification',
  templateUrl: './createnotification.component.html',
  styleUrls: ['./createnotification.component.scss']
})
export class CreateNotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic (if needed)
  }

  onSubmit() {
    this.notificationService.add(this.notificationForm.value).subscribe((res: any) => {
      console.log("Notification created successfully");
      this.router.navigateByUrl('/admin/notificationlist'); // Adjust route as needed
    });
  }

  notificationForm: FormGroup = new FormGroup({

    message: new FormControl(),
    status: new FormControl('Active'),  // Default value to "Active"
    notificationType: new FormControl(),

  });
}
