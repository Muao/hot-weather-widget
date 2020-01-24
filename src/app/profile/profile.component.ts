import { DataService } from '../servises/data.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profile: Profile;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getCurrentHotel
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
     this.profile = res.profile;
   });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
