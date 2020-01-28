import { DataService } from './../servises/data.service';
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input()
  public hotels: Hotel[];
  public currentHotel: Hotel;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentHotel
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.currentHotel = res;
    });
  }

  public selectHotel(hotel: Hotel): void {
    this.dataService.setCurrentHotel(hotel);
  }

  public addToFavorite(hotel: Hotel, $event: MouseEvent): void {
    this.dataService.addToFavorite(hotel);
    $event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
