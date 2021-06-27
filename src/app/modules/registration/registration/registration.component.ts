import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleModalService } from 'ngx-simple-modal';
import { InformationModalComponent } from '../../../ui/modals/information-modal/information-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});
  public registerErrors: string[] = [];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private simpleModalService: SimpleModalService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      passwordConfirm: [''],
      phone: [''],
    });
  }

  public register(): void {
    this.registerErrors.length = 0;
    const form = this.registerForm.value;
    if (form.password !== form.passwordConfirm) {
      this.registerErrors.push("Passwords doesn't match!");
      return;
    }
    this.authService
      .register({
        email: form.email,
        password: form.password,
        displayName: `${form.firstName} ${form.lastName}`,
        disabled: false,
        phoneNumber: form.phone,
      })
      .subscribe(
        res => {
          console.log('success login', res);
          const disposable = this.simpleModalService
            .addModal(InformationModalComponent, {
              title: 'Registration successful!',
              message: `Than you for registration, ${form.firstName}. You will be redirected to login soon.`,
            })
            .subscribe();
          setTimeout(() => {
            disposable.unsubscribe();
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 100);
          }, 2000);
        },
        err => {
          this.registerErrors.push(err.message);
          console.log('error login', err);
        },
      );
  }
  public resetErrors(): void {
    this.registerErrors.length = 0;
  }
}
