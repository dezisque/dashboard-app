import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});
  public email: string = '';
  public password: string = '';
  public loginErrors: string[] = [];
  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  public login(): void {
    console.log('login');
    this.loginErrors.length = 0;
    const form = this.loginForm.value;
    this.auth.login(form.email, form.password).subscribe(
      () => {
        this.router.navigate(['dashboard']);
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
