import {NgModule} from '@angular/core';
import {AppHotelsComponent} from './app-hotels.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [AppHotelsComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppHotelsComponent]
})
export class AppHotelsModule { }
