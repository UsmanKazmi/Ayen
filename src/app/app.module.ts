import { GooglePlus } from '@ionic-native/google-plus';
import { ConfirmationCodeSuccessPage } from './../pages/confirmation-code-success/confirmation-code-success';
import { ConfirmationCodePage } from './../pages/confirmation-code/confirmation-code';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    ConfirmationCodeSuccessPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    ConfirmationCodeSuccessPage


  ],
  providers: [
    GooglePlus,
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
