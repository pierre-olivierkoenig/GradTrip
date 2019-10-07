import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public admin = true;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  getAdmin(){
    return this.admin;
  }
}
