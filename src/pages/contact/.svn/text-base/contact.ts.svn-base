import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  data:any;
  title = "Contact";

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.data = navParams.get('item1')
    if(this.data != null){
      this.title = this.data;
    }
    console.log(this.data);
  }

  /*
 *
 *  | Page Event          | Returns                     | Description                                                                                                                                                                                                                                                    |
 *  |---------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 *  | `ionViewDidLoad`    | void                        | Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The `ionViewDidLoad` event is good place to put your setup code for the page. |
 *  | `ionViewWillEnter`  | void                        | Runs when the page is about to enter and become the active page.                                                                                                                                                                                               |
 *  | `ionViewDidEnter`   | void                        | Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.                                                                                                                         |
 *  | `ionViewWillLeave`  | void                        | Runs when the page is about to leave and no longer be the active page.                                                                                                                                                                                         |
 *  | `ionViewDidLeave`   | void                        | Runs when the page has finished leaving and is no longer the active page.                                                                                                                                                                                      |
 *  | `ionViewWillUnload` | void                        | Runs when the page is about to be destroyed and have its elements removed.                                                                                                                                                                                     |
 *  | `ionViewCanEnter`   | boolean/Promise&lt;void&gt; | Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter                                                                                                     |
 *  | `ionViewCanLeave`   | boolean/Promise&lt;void&gt; | Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave                                                                                                     |
 *
 */
// 页面被加载完成后调用的函数，切换页面时并不会进行重新加载，因为有cache的存在
  ionViewDidLoad() {
    console.log('page 1: page loaded.');
  }

// 页面即将进入的时候
  ionViewWillEnter() {
    // 在这里可以做页面初始化的一些事情
    console.log('page 1: page will enter.');
  }

// 页面已经进入的时候
  ionViewDidEnter() {
    console.log('page 1: page did enter.');
  }

// 页面即将离开的时候
  ionViewWillLeave() {
    console.log('page 1: page will leave.');
  }

// 页面已经离开的时候
  ionViewDidLeave() {
    console.log('page 1: page did leave.');
  }

// 从 DOM 中移除的时候执行的生命周期
  ionViewWillUnload() {

  }

// 从 DOM 中移除执行完成的时候
  onPageDidUnload() {

  }
}
