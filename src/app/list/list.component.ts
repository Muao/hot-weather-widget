import { DataService } from './../servises/data.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
    this.hotels = this.dataService.getHotels;
    this.currentHotel = this.dataService.getCurrentHotel;
    this.options = this.dataService.getOptions;
  }

  public selectHotel(hotel: Hotel): void {
    this.dataService.setCurrentHotel(hotel);
  }

  public addToFavorite(hotel: Hotel): void {
    this.dataService.addToFavorite(hotel);
  }
}
