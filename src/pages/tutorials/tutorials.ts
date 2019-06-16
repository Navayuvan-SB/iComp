import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';


@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
})
export class TutorialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialsPage');
  }

  ionicTutorial(){

    window.open("https://ionicframework.com/docs/v3/intro/installation/", '_system');

  }

  ionicComp(){

    window.open("https://ionicframework.com/docs/v3/components/", '_system');

  }

}
