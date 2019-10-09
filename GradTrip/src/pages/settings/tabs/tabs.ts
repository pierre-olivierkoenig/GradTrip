import {Component} from "@angular/core";
import {EventsPage} from "../../events/events";
import {SettingsPage} from "../settings";
import {Account, AccountPage} from "../../account/account";
import {InfosPage} from "../../infos/infos";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  admin: boolean;

  constructor(public navCtrl: NavController){
  }

  eventsPage = EventsPage;
  settingsPage = SettingsPage;
  accountPage = AccountPage;
  infoPage = InfosPage;
  seePage : boolean = false;

  account = new Account(true);

  ionViewDidLoad() {this.seePage = this.account.admin;}
}
