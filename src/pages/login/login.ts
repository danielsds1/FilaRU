import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index";
import {Validators, FormBuilder} from "@angular/forms";

import {Http, Headers, Response, ResponseOptions} from "@angular/http";

import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  cadastro: any = {

  };

  messageEmail = "";
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  site = {
    url: 'javasampleapproach.com',
    description: 'Java technology',
  };

  //api:string = 'http:localhost:3306/ionic';

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public db: AngularFireDatabase)
  {
    this.cadastro = this.formBuilder.group({
      nome:['', Validators.required],
      senha:['', Validators.compose([
                  Validators.required,
                  //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],

    });
    this.db.list('site').push(this.site);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    let{nome, senha} = this.cadastro.controls;
    if(!this.cadastro.valid)
    {
      if(!nome.valid)
      {
        this.errorEmail = true;
        this.messageEmail = 'Usuário inválido';
      }else{
        this.messageEmail = "";
      }

      if(!senha.valid)
      {
        this.errorPassword= true;
        this.messagePassword = 'A senha é obrigatória';
      }else{
        this.messagePassword = "";
      }
    }else{
      //alert('Login realizado');
      this.navCtrl.push(IndexPage);
    }

  }

}
