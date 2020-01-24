import { Component, OnInit } from '@angular/core';
import { DataService } from './servises/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public hotels: Hotel[];
  public favoriteHotels: Hotel[];

  public constructor(private dataService: DataService) {
    this.dataService.getHotels.subscribe(res => {
      this.hotels = res;
    });
  }

  public ngOnInit(): void {
    this.dataService.getFavoriteHotels.subscribe(res => {
      this.favoriteHotels = res;
    });
  }
}
