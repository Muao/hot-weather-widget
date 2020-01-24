import {DataService} from './../servises/data.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFavoriteHotels
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.favoriteHotels = res;
    });
  }

  public remove(id: number): void {
    this.dataService.deleteFromFavorites(id);
    this.favoriteHotels = this.favoriteHotels.filter((h: Hotel) => h.id !== id);

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
