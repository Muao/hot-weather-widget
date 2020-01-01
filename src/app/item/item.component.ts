import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  public hotels: Hotel[];

  @Input()
  public currentHotel: Hotel;
  constructor() { }

  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  @Output()
  public favorite: EventEmitter<Hotel> = new EventEmitter();

  ngOnInit() {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }

  public addToFavorite(hotel: Hotel): void {
    this.favorite.emit(hotel);
  }
}
