import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { User } from '../../models/auth/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  public login(email: string, password: string): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  public logout(): Observable<any> {
    return from(this.auth.signOut());
  }

  public register(user: User): Observable<any> {
    return from(
      this.auth.createUserWithEmailAndPassword(
        user.email,
        user.password as string,
      ),
    );
  }
}
