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

  constructor() { }

  ngOnInit() {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }
}
