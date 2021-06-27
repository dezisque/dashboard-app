import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleModalService } from 'ngx-simple-modal';
import { InformationModalComponent } from '../../../../ui/modals/information-modal/information-modal.component';
import { Router } from '@angular/router';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});
  public registerErrors: string[] = [];
  public faChevronCircleLeft = faChevronCircleLeft;

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
      })
      .subscribe(
        res => {
          // update profile with additional info
          res.user.updateProfile({
            displayName: `${form.firstName} ${form.lastName}`,
          });
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
        },
      );
  }
  public resetErrors(): void {
    this.registerErrors.length = 0;
  }

  public back(): void {
    this.router.navigate(['..']).then();
  }
}
