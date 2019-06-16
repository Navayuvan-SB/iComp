import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-introduce-yourself',
  templateUrl: 'introduce-yourself.html',
})
export class IntroduceYourselfPage {

  name: 'name';
  city: 'city';
  dateofbirth: 'dateofbirth';
  ionicStage: 'ionicStage';
  studyTime: 'studyTime';
  as: boolean;
  xam: boolean;
  flu: boolean;

  selected: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage, public loading: LoadingController) {
  }

  datachanged1(e:any){
    this.as = e.checked;
  }
  datachanged2(e:any){
    
    this.xam = e.checked;
  }
  datachanged3(e:any){
    
    this.flu = e.checked;
  }

  submitClick(){

    if (this.as == true){
        this.selected.push("Android Studio");
        //this.selected += "- Android Studio -";
    }

    if (this.xam == true){
      this.selected.push("Xamarin");
      //this.selected += " Xamarin -";
    }
    if (this.flu == true) {
     this.selected.push("Flutter");

     //this.selected += " Flutter -"
    }

    if (this.name){
      this.storage.set("Name", this.name); 
    }
    if (this.city){
      this.storage.set("City", this.city);
    }
    
    if (this.dateofbirth){
      this.storage.set("DOB", this.dateofbirth);
    }
    if (this.studyTime){
      this.storage.set("StudyTime", this.studyTime);
    }
    if (this.selected){
      this.storage.set("Selected", this.selected);
    }
    if (this.ionicStage){
      this.storage.set("Stage", this.ionicStage);
    }
    

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 2000
    });
    
    let toast = this.toastCtrl.create({
      message: "Thanks for your Intro....!!!",
      duration: 2000,
    });
    loader.present();
    toast.present();

  }
  
}
