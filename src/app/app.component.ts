import { Component } from '@angular/core';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-push';

  constructor(
    private _pushNotifications: PushNotificationsService
  ) {
    this._pushNotifications.requestPermission();
  }

  notify() { //our function to be called on click
    let titile = "Tony Stark"
    let options = { //set options
      body: "The truth is, I'am Iron Man!",
      icon: "http://cdn.shopify.com/s/files/1/0257/6087/products/7047a312f35f782e71452d3621f2ba95.png?v=1556498542" //adding an icon
    }
    this._pushNotifications.create(titile, options).subscribe( //creates a notification
      res => console.log(res),
      err => console.log(err)
    );
  }
}
