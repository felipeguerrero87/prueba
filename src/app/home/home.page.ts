import { Component } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uuid: any;

  constructor(private uniqueDeviceID: UniqueDeviceID) { }

  getUUID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.uuid = uuid;
      })
      .catch((error: any) => console.log(error));
  }

}
