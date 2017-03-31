import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ButtonPage } from '../pages/button/button';
import { InputPage } from '../pages/input/input';
import { CanvasPage } from '../pages/canvas/canvas';

@NgModule({
  declarations: [
    ButtonPage,
    InputPage,
    CanvasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  entryComponents: [
    ButtonPage,
    InputPage,
    CanvasPage
  ],
  providers: [ ]
})
export class ComponentModule {}
