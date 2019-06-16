import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  name: string;
  city: string;
  dob: any;
  duration: any;
  stage: string;
  technology: string;
  public isToggled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

    this.isToggled = false;

    this.storage.get("Name").then((data)=>{
      this.name = data;
    });

    this.storage.get("City").then((data)=>{
      this.city = data;
    });

    this.storage.get("DOB").then((data)=>{
      this.dob = data;
    });

    this.storage.get("StudyTime").then((data)=>{
      this.duration = data;
    });

    this.storage.get("Selected").then((data)=>{
      this.technology = data;
    });

    this.storage.get("Stage").then((data)=>{
      this.stage = data;
    });
   
  }

  public notify() {
    if (this.isToggled){
      document.documentElement.style.setProperty(`--color`, "green");
    }else{
      document.documentElement.style.setProperty(`--color`, "black");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  clearAll(){

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          handler: () => {

            this.storage.set("Name", "");
            this.storage.set("City", "");
            this.storage.set("DOB", "");
            this.storage.set("StudyTime", "");
            this.storage.set("Selected", "");
            this.storage.set("Stage", "");
            
            const alert = this.alertCtrl.create({
              title: 'Cleared.!!',
              subTitle: 'Your details from my mind was erased..!!',
              buttons: ['OK']
            });
            alert.present();

          }
        },{
          text: 'Oops..!! Sorry',
          handler: () => {
            
          }
        }
      ]
    });
    actionSheet.present();

  }

}
