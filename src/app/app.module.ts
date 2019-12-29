import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import {AppHotelsComponent} from './app-hotels/app-hotels.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppHotelsComponent, AppComponent, WeatherComponent, ProfileComponent,
    HeaderComponent, FooterComponent, ListComponent, ListItemComponent],
  imports: [
    BrowserModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
