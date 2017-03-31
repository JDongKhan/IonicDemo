import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpService} from "../../providers/http-service";
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[HttpService]
})
export class LoginPage {
  private todo : FormGroup;

  constructor(public modalCtrl: ViewController, public navParams: NavParams,private formBuilder: FormBuilder,public service:HttpService) {
    this.todo = this.formBuilder.group({
      account: ['', [Validators.required, Validators.minLength(6)]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }
  back(){
    this.modalCtrl.dismiss({});
  }
  logForm(){
    this.service.get("login.json").then(data=>{
     // console.log(data)
    })
    console.log(this.todo.value)
    alert("欢迎["+this.todo.value.account+"]登录成功");
    this.modalCtrl.dismiss({});
  }
}
