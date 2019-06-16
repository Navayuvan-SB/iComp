import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicMagicsPage } from './ionic-magics';

@NgModule({
  declarations: [
    IonicMagicsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicMagicsPage),
  ],
})
export class IonicMagicsPageModule {}
