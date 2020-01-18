import { Component, OnInit } from '@angular/core';
import { DataService } from './servises/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public favoriteHotels: Hotel[];

  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getFavoriveHotels.subscribe(res => {
      this.favoriteHotels = res;
    });
  }
}
