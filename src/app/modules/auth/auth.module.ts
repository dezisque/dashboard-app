import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login/login.component';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from '../../shared/services/auth/auth.service';
import { SimpleModalModule } from 'ngx-simple-modal';
import { InformationModalComponent } from '../../ui/modals/information-modal/information-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    InformationModalComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SimpleModalModule,
  ],
  providers: [AuthService],
  entryComponents: [InformationModalComponent],
})
export class AuthModule {}
