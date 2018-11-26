import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainhomePage } from './mainhome';

@NgModule({
  declarations: [
    MainhomePage,
  ],
  imports: [
    IonicPageModule.forChild(MainhomePage),
  ],
})
export class MainhomePageModule {}
