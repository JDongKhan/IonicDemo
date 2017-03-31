import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {HttpClient} from "../../providers/HttpClient";
//import {NewsItemModel} from "../../models/common/NewsItemModel";
import {NewsItem} from "../../models/common/NewsItem";
import {NewsItemGroupModel} from "../../models/common/NewsItemGroupModel";

import {ISSConfig} from "../../models/common/ISSConfig";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //第一个
  private topNews = [];
  //第二部分
  private newsList:Array<NewsItem> = [];

  //第三部分
  serveList = ISSConfig.serveList;

  mySeg: string = "info";
  mySegFour:string = "activity";

  constructor(public navCtrl: NavController,public httpclient: HttpClient) {
    this.topNews =[
      {"image":"http://files.ovdream.com/1453095464864.jpg"},
      {"image":"http://files.ovdream.com/1453095464864.jpg"},
      {"image":"http://files.ovdream.com/1453095464864.jpg"},
    ]
  }
  fiveSelectType(index:number){

  }

  ionViewDidLoad() {
    // this.startLoading(this.loadingCtrl);
    this.getNews();
  }


  getNews() {
    let jsonFile = "assets/json/newsList.json";
    let jsonDict = {"jsonFile": jsonFile};
    this.httpclient.getNews<NewsItemGroupModel>(jsonDict).subscribe((itemGroup)=>{
      //this.stopLoading();
      if(itemGroup && itemGroup.result.length > 0) {
        this.newsList.push(...itemGroup.result);
      }
    }, (errMsg)=>{
     // this.stopLoading();
      console.log(errMsg);
    })
  }


}
