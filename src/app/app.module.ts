import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroduceYourselfPage } from '../pages/introduce/introduce-yourself';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SliderPage } from '../pages/slider/slider';
import { IonicMagicsPage } from '../pages/ionic-magics/ionic-magics';
import { SettingsPage } from '../pages/settings/settings';
import { ProfileProvider } from '../providers/profile/profile';
import { ProfilePage } from '../pages/profile/profile';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { MyPopOverPage } from '../pages/my-pop-over/my-pop-over';

@NgModule({
  declarations: [

    MyApp,
    HomePage,
    IntroduceYourselfPage,
    SliderPage,
    IonicMagicsPage,
    SettingsPage,
    ProfilePage,
    TutorialsPage,
    SearchBarPage,
    MyPopOverPage

  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    HomePage,
    IntroduceYourselfPage,
    SliderPage,
    IonicMagicsPage,
    SettingsPage,
    ProfilePage,
    TutorialsPage,
    SearchBarPage,
    MyPopOverPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileProvider,
    InAppBrowser
  ]
})
export class AppModule {}
