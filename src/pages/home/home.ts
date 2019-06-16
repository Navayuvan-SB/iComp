import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;

  

  constructor(public navCtrl: NavController, public storage: Storage) {

    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(SliderPage);
      }
      
    });

    this.storage.get("Name").then((data)=>{
      this.name = data;
   });
  }


  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(SliderPage);
      }
    });
  }  

}
