import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import {HttpClient} from "../providers/HttpClient";
import {JsonpModule, HttpModule} from "@angular/http";

import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { WelcomePage } from '../welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { ModalPage } from '../pages/modal/modal';

import { ComponentModule } from './component.module';



export function provideStorage() {
  return new Storage({ name: '__mydb' });
}


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    UserPage,
    LoginPage,
    ListPage,
    ModalPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios'
    }),
    ComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    UserPage,
    LoginPage,
    ListPage,
    ModalPage,
    TabsPage
  ],
  providers: [ { provide: Storage, useFactory: provideStorage },{provide: ErrorHandler, useClass: IonicErrorHandler},HttpClient]
})
export class AppModule {}
