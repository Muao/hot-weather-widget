import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input()
  public favoriteHotels: Hotel[];
  constructor() { }

  ngOnInit() {
  }

  // public removeFromFavarites(hotel: Hotel): void {
  //   this.favoriteHotels.filter(h => h !== hotel);
  // }
}
