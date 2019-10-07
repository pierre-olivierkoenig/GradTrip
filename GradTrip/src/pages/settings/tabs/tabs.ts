import {Component} from "@angular/core";
import {EventsPage} from "../../events/events";
import {SettingsPage} from "../settings";
import {AccountPage} from "../../account/account";
import {InfosPage} from "../../infos/infos";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  eventsPage = EventsPage;
  settingsPage = SettingsPage;
  accountPage = AccountPage;
  infoPage = InfosPage;
  seePage : boolean = false;

  ionViewDidLoad() {this.seePage = this.accountPage.getAdmin();}
}
