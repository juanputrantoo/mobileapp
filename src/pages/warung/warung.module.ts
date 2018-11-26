import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarungPage } from './warung';

@NgModule({
  declarations: [
    WarungPage,
  ],
  imports: [
    IonicPageModule.forChild(WarungPage),
  ],
})
export class WarungPageModule {}
