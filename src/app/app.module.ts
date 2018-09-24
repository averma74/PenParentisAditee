import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoalsPage } from '../pages/goals/goals';
import { WriteNowPage } from '../pages/write-now/write-now';
import { MembershipPage } from '../pages/membership/membership';
import {SalonsPage} from '../pages/salons/salons';
import {DonatePage} from '../pages/donate/donate';
import {ResourcesPage} from '../pages/resources/resources';
import {FacebookPage} from '../pages/facebook/facebook';
import {TwitterPage} from "../pages/twitter/twitter";
import {LoginPage} from '../pages/login/login' ;
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from '../pages/register/register' ;
import{InstagramPage} from "../pages/instagram/instagram";
import {BlankdocPage} from "../pages/blankdoc/blankdoc";
import {TimerPage} from "../pages/timer/timer";
import {ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {IonicStorageModule} from "@ionic/storage";

import { AngularFireAuthModule} from "angularfire2/auth"
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { NoteService } from '../providers/note-service/note-service';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ViewNotePage} from "../pages/view-note/view-note";
import { InAppBrowser} from "@ionic-native/in-app-browser";
import { BrowserTab } from "@ionic-native/browser-tab";

@NgModule({
  declarations: [
    MyApp,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage,
    InstagramPage,
    TwitterPage,
    BlankdocPage,
    //CountdownTimerPage,
    TimerPage,
    ProgressBarComponent,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage,
    BlankdocPage,
    InstagramPage,
    TwitterPage,
    //CountdownTimerPage,
    TimerPage,
    ViewNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    InAppBrowser,
    BrowserTab,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
