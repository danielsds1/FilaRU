import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {PageCreditoPage} from "../page-credito/page-credito";
import {PageSemanaPage} from "../page-semana/page-semana";
import { AlertController } from 'ionic-angular';
import {Cliente} from "./cliente";
import {Fila} from "./fila";


@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  fl = new Fila();
  statusSenha:boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  public logout()
  {
    this.navCtrl.push(LoginPage);
  }

  public pageDeposita()
  {
    this.navCtrl.push(PageCreditoPage);
  }

  public pageCalendario()
  {
    this.navCtrl.push(PageSemanaPage);
  }



  public cancelaSenha() {
    let confirm = this.alertCtrl.create({
      title: 'Cancelar senha',
      message: 'Você deseja cancelar sua refeição?',
      buttons: [
        {
          text: 'CANCELAR',
          handler: () => {
            //this.statusSenha = false;
            //this.checaSenha();
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            document.getElementById('senha').innerHTML = 'Senha: ';
            this.statusSenha = true;
            console.log('Agree clicked');
          }
        }
      ]
    });
    /*if (this.statusSenha == true)
    {
      console.log('fila cancelada');
      document.getElementById('senha').innerHTML = 'Senha: ';
    }
    else {
      console.log('fila não cancelada');
    }*/
    confirm.present();
  }


}
