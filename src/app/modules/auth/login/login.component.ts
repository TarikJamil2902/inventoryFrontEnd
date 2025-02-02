import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        // Assuming the response contains the token and other info
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Redirect to the dashboard after successful login
      },
      (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}
