import { DataService } from '../servises/data.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public weather: Weather;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurrentHotel
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      this.weather = res.weather;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
