import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public hotels: Hotel[];

  @Input()
  public currentHotel: Hotel;

  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  @Output()
  public favorite: EventEmitter<Hotel> = new EventEmitter();

  public options: string[] = new Array('All', '3', '4', '5');

  constructor() { }

  ngOnInit() {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }

  public addToFavorite(hotel: Hotel): void {
    this.favorite.emit(hotel);
  }
}
