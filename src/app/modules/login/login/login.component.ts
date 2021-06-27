import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}
  public email: string = '';
  public password: string = '';
  public loginErrors: string[] = [];

  ngOnInit(): void {}

  public login(): void {
    this.auth.login(this.email, this.password).subscribe(
      res => {
        console.log(res);
      },
      error => {
        this.loginErrors.push(error.message);
      },
    );
  }

  public resetErrors(): void {
    this.loginErrors.length = 0;
  }
}
