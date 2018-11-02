import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StreamingMedia} from '@ionic-native/streaming-media';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media } from '@ionic-native/media';

import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';
import { AppCenterCrashes } from '@ionic-native/app-center-crashes';
import { AppCenterPush } from '@ionic-native/app-center-push';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    BackgroundMode,
    NativeAudio,
    Media,
    AppCenterAnalytics,
    AppCenterCrashes,
    AppCenterPush
  ]
})
export class AppModule {}
