import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  uid: string;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    this.firebaseAuth.authState.subscribe(user => {
      if(user) {
        this.uid = user.uid;
      } else {
        // ログアウト
        this.uid = null;
      }
    });
  }
}
