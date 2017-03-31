import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ElementRef, ViewChild} from '@angular/core';
/*
  Generated class for the Canvas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html'
})
export class CanvasPage {

  @ViewChild("theCanvas") theCanvas: ElementRef;
  @ViewChild("content") content: ElementRef;

  private points:Array<{ x: number, y: number }> = [];

  ctx: CanvasRenderingContext2D;  // canvas context
  //path;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  setupPaperJS(canvas) {

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad CanvasPage');
    this.ctx = this.theCanvas.nativeElement.getContext("2d");
    this.ctx.strokeStyle = "#df4b26";
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = 1;
  }
  dragEvent(event:TouchEvent) {
    console.info('dragEvent');
    let point: { x: number, y: number } = { x: event.touches[0].clientX-20, y: event.touches[0].clientY-64 };
    this.points.push(point);
    this.ctx.lineTo(point.x, point.y);
    this.ctx.stroke();
  }

  upEvent(event: TouchEvent) {
    console.info('upEvent');
  }

  downEvent(event: TouchEvent){
    console.info('downEvent');
    let point: { x: number, y: number } = { x: event.touches[0].clientX-20, y: event.touches[0].clientY-64 };
    this.ctx.moveTo(point.x, point.y);
  }


  redraw() {
      for (let i = 0 ;i <this.points.length;i++) {
        let point:{ x: number, y: number } = this.points[i];
        if (i == 0) {
          this.ctx.moveTo(point.x, point.y);
        } else {
          this.ctx.lineTo(point.x, point.y);
        }
      }
    this.ctx.stroke();
  }
}
