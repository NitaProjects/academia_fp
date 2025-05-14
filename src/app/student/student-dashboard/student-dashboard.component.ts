import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-student-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe();
  }
}
