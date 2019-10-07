import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-event',
  templateUrl: 'single-event.html',
})
export class SingleEventPage implements OnInit{

  name :String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('eventName');
  }
}
