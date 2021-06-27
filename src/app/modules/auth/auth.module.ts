import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { SimpleModalModule } from 'ngx-simple-modal';
import { InformationModalComponent } from '../../ui/modals/information-modal/information-modal.component';
import { FontawesomeModule } from '../../shared/modules/shared/fontawesome.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    InformationModalComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SimpleModalModule,
    FontawesomeModule,
  ],
  providers: [AuthService],
  entryComponents: [InformationModalComponent],
})
export class AuthModule {}
