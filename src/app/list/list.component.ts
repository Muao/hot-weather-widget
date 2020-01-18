import { DataService } from './../servises/data.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public hotels: Hotel[];
  public currentHotel: Hotel;
  public options: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHotels.subscribe(res => {
      this.hotels = res;
    });

    this.dataService.getCurrentHotel.subscribe( res => {
      this.currentHotel = res;
    });

    this.dataService.getOptions.subscribe(res => {
      this.options = res;
    });
  }

  public selectHotel(hotel: Hotel): void {
    this.dataService.setCurrentHotel(hotel);
  }

  public addToFavorite(hotel: Hotel): void {
    this.dataService.addToFavorite(hotel);
  }
}
