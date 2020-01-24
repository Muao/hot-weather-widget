import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentHotel: BehaviorSubject<Hotel> = new BehaviorSubject<Hotel>(null);
  private favoriteHotels: Hotel[] = [];

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}


  public get getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.api}/hotels`)
      .pipe(map(res => {
        this.currentHotel.next(res[0]);
        return res;
      }));
  }

  public get getCurrentHotel(): Observable<Hotel> {
    return this.currentHotel;
  }

  public setCurrentHotel(hotel: Hotel) {
    this.currentHotel.next(hotel);
  }

  public get getFavoriteHotels(): Observable<Hotel[]> {
    return of(this.favoriteHotels).pipe();
  }

  public addToFavorite(hotel: Hotel): void {
    this.favoriteHotels.push(hotel);
    // remove duplicated value in array
    this.favoriteHotels = Array.from(new Set(this.favoriteHotels));
    this.snackBar.open(hotel.title + ' was added to favorite list', 'Adding', {duration: 2000});
  }

  public get getOptions(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api}/options`);
  }
}
