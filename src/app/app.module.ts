import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { VillageComponent } from './village/village.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';


@NgModule({
  declarations: [AppComponent, WeatherComponent, ProfileComponent,
    HeaderComponent, FooterComponent, ListComponent, VillageComponent, TeddyBearComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
