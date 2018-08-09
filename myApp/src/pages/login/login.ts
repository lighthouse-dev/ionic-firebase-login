import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthService } from '../../app/auth/auth.service';
import { User } from '../../model/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) {

  }

  // Login
  async login(user: User) { }

  // Logout
  logout() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
