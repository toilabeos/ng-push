import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PushNotificationsModule } from 'ng-push'; //import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PushNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
