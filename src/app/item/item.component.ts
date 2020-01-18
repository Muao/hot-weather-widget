import { DataService } from './../servises/data.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  public hotels: Hotel[];
  public currentHotel: Hotel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentHotel.subscribe(res => {
      this.currentHotel = res;
    });
  }

  public selectHotel(hotel: Hotel): void {
    this.dataService.setCurrentHotel(hotel);
  }

  public addToFavorite(hotel: Hotel): void {
    this.dataService.addToFavorite(hotel);
  }
}
