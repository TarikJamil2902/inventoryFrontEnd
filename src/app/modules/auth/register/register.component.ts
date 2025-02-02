import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName = '';
  userFirstName = '';
  userLastName = '';
  email = '';
  password = '';
  role = 'USER'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    const userDTO = {
      userName: this.userName,
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      email: this.email,
      password: this.password,
      roles: [this.role] // Roles array based on the DTO
    };

    this.authService.register(userDTO).subscribe({
      next: () => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
      }
    });
  }
}
