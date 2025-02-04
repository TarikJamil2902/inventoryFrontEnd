import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-updatenotification',
  templateUrl: './updatenotification.component.html',
  styleUrls: ['./updatenotification.component.scss']
})
export class UpdatenotificationComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: any;
  notificationData!: any;

  notificationForm: FormGroup = new FormGroup({
    notificationId: new FormControl(),
    message: new FormControl(),
    status: new FormControl(),
    createdAt: new FormControl(),
    notificationType: new FormControl(),
    userName: new FormControl()
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.notificationService.getById(this.id).subscribe((val: any) => {
      this.notificationData = val;
      console.log(this.notificationData);
      this.notificationForm.setValue(this.notificationData);
    });
  }

  onSubmit() {
    this.notificationService.updateData(this.notificationForm.value).subscribe(() => {
      this.router.navigateByUrl('/notificationlist');
    });
  }
}
