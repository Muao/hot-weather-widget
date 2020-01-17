import { SharedModule } from './shared/shared.module';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {AppHotelsComponent} from './app-hotels/app-hotels.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleAndDescriptionSearchPipe } from './list/pipe/title-and-description-search.pipe';
import { FilteringByStarsPipe } from './list/pipe/filtering-by-stars.pipe';
import { DataService } from './servises/data.service';



@NgModule({
  declarations: [
    AppHotelsComponent,
    AppComponent,
    WeatherComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ItemComponent,
    FavoriteComponent,
    TitleAndDescriptionSearchPipe,
    FilteringByStarsPipe
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
