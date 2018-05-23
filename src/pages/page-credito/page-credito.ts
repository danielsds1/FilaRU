import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageSemanaPage} from "../page-semana/page-semana";
import {LoginPage} from "../login/login";

/**
 * Generated class for the PageCreditoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-credito',
  templateUrl: 'page-credito.html',
})
export class PageCreditoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageCreditoPage');
  }

  public logout()
  {
    this.navCtrl.push(LoginPage);
  }


  public pageCalendario()
  {
    this.navCtrl.push(PageSemanaPage);
  }


}
