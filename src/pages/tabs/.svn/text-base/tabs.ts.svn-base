import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ListPage } from '../list/list';
import { UserPage } from '../user/user';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ListPage;
  tab4Root: any = UserPage;

  constructor(public modalCtrl: ModalController) {

  }
  changeTabs = function(){
    console.log("tab changed");
  };

  // 选中tab页后的事件
  loginAction(){
      //声明一个modal
     let modal = this.modalCtrl.create(LoginPage);
      modal.onDidDismiss((item) => {
         if(item){
              //this.saveItem(item);
          }
     });
     // 弹出modal
      modal.present();
   }
  ionViewDidEnter(){

  }
}
