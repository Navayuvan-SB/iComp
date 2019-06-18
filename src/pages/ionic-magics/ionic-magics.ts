import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MyPopOverPage } from '../my-pop-over/my-pop-over';
import { SearchBarPage } from '../search-bar/search-bar';


/**
 * Generated class for the IonicMagicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic-magics',
  templateUrl: 'ionic-magics.html',
})
export class IonicMagicsPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicMagicsPage');
  }

  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }

  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(MyPopOverPage);
    popover.present({
      ev: myEvent
    });
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(SearchBarPage);
    modal.present();
  }
  


}
