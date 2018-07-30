import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WriteNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-now',
  templateUrl: 'write-now.html',
})
export class WriteNowPage {//start export class WriteNowPage

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {//start Constructor

  }//end Constructor

  ionViewDidLoad() {//start ionViewDidLoad
    console.log('ionViewDidLoad WriteNowPage');
  }//end ionViewDidLoad

}//end export class WriteNowPage