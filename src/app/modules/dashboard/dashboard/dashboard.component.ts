import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }

  public getUser(): void {
    this.authService.getUser().subscribe(res => {
      console.log('getuser uid', res);
    });
  }
}
