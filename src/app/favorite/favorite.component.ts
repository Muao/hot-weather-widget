import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input()
  public favoriteHotels: Hotel[];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public remove(index: number): void {
    this.snackBar.open(
      this.favoriteHotels[index].title + ' Successfully removed from favorite',
      'Removing',
      {
      duration: 2000,
    });
    this.favoriteHotels.splice(index, 1);

  }
}
