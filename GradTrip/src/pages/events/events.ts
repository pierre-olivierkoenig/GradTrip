import { Component}  from "@angular/core";
import {NavController} from "ionic-angular";
import {SingleEventPage} from "./single-event/single-event";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage{
  constructor(private navCtrl: NavController) {}

  onLoadAppareil(name: string){
    this.navCtrl.push(SingleEventPage, {eventName: name});
  }
}
