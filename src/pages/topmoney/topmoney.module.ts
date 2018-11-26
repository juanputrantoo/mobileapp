import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopmoneyPage } from './topmoney';

@NgModule({
  declarations: [
    TopmoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(TopmoneyPage),
  ],
})
export class TopmoneyPageModule {}
