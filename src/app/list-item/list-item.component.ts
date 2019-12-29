import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  public hotels: Hotel[];

  @Input()
  public currentHotel: Hotel;
  constructor() { }

  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  ngOnInit() {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }
}
