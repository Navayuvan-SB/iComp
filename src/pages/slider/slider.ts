import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slides = [
    {
      title: "Welcome to the iComp!",
      description: "iComp is an <b>Ionic Component</b> showcases for the beginners who are being exposed to Ionic framework for the first time.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "How this App helps?",
      description: "This app contains all the <b>Components Ionic</b> have. This app also showcases the usage of all components in an interactive way.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
];

navToStart(){
  this.navCtrl.setRoot(HomePage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

}
