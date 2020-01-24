import { DataService } from './../servises/data.service';
import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject();


  public favoriteHotels: Hotel[];
  constructor(private snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFavoriteHotels
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.favoriteHotels = res;
    });
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
