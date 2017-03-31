import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input',
  templateUrl: 'input.html'
})
export class InputPage {
  public user = {
    username: 'parry',
    password: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }
  showFill() {
    alert(this.user.username);
    console.log(this.user.password);
  }
}
