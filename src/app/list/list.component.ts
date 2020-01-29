import {DataService} from './../servises/data.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {PageEvent} from '@angular/material';
import {IHotelPaginationOptions} from './interfaces/hotel-pagination-options';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public hotels: Hotel[];
  public allHotels: Hotel[];
  public currentHotel: Hotel;
  public options: string[];
  private destroy$: Subject<boolean> = new Subject();

  public pageOptions: IHotelPaginationOptions = {
    _page: 0,
    _limit: 2
  };

  constructor(private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((data: ParamMap) => {
      const pageOpt = {
        _limit: Number(data.get('_limit')) || this.pageOptions._limit,
        _page: Number(data.get('_page')) || this.pageOptions._page,
      };
      this.getHotels(pageOpt);
    });

    this.dataService.getHotels
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.allHotels = res;
      });

    this.dataService.getCurrentHotel
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.currentHotel = res;
      });

    this.dataService.getOptions
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.options = res;
      });
  }

  public changePageOptions(options: PageEvent): void {
    this.router.navigate(
      [''],
      {
        queryParams: {_limit: options.pageSize, _page: options.pageIndex},
        relativeTo: this.activatedRoute
      }
    );
  }

  public getHotels(options: IHotelPaginationOptions): void {
    this.dataService.getHotelsOpt(options)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Hotel[]) => {
        this.hotels = res;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
