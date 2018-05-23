import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public pageIndex()
  {
    this.navCtrl.push(IndexPage);
  }

  public logout()
  {
    this.navCtrl.push(LoginPage);
  }

}
