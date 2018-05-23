import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageCreditoPage} from "../page-credito/page-credito";
import {LoginPage} from "../login/login";

/**
 * Generated class for the PageSemanaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-semana',
  templateUrl: 'page-semana.html',
})
export class PageSemanaPage {

  currentDate = new Date();
  currentDate2 = Number(this.currentDate.getDate());


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageSemanaPage');
  }


  public pageDeposita()
  {
    this.navCtrl.push(PageCreditoPage);
  }


  public logout()
  {
    this.navCtrl.push(LoginPage);
  }

}
