import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProfileProvider {

  public nameG: string;
  public dateOfBirthG: string;
  public cityG: string;
  public durationOfStudyG: string;
  public stageG: string;
  public technologyG: string;


  constructor(public http: HttpClient) {

    this.nameG = "";
    this.dateOfBirthG = "";
    this.cityG = "";
    this.durationOfStudyG = "";
    this.stageG = "";
    this.technologyG = "";

    console.log('Hello ProfileProvider Provider');
  }

  getName(){
    return this.nameG;
  }
  setName(value){
    this.nameG = value;
  }

  getDoB(){
    return this.dateOfBirthG;
  }
  setDoB(value){
    this.dateOfBirthG = value;
  }

  getCity(){
    return this.cityG;
  }
  setCity(value){
    this.cityG = value;
  }

  getDuration(){
    return this.durationOfStudyG;
  }
  setDuration(value){
    this.durationOfStudyG = value;
  }

  getStage(){
    return this.stageG;
  }
  setStage(value){
    this.stageG = value;
  }

  getTechnology(){
    return this.technologyG;
  }
  setTechnology(value){
    this.technologyG = value;
  }

}
