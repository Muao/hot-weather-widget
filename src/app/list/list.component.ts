import { DataService } from './../servises/data.service';
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public hotels: Hotel[];
  public currentHotel: Hotel;
  public options: string[];
  private destroy$: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHotels
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.hotels = res;
    });

    this.dataService.getCurrentHotel
      .pipe(takeUntil(this.destroy$))
      .subscribe( res => {
      this.currentHotel = res;
    });

    this.dataService.getOptions
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.options = res;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
