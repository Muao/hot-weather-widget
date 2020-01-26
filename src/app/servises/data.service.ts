import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentHotel: BehaviorSubject<Hotel> = new BehaviorSubject<Hotel>(null);
  private favoriteHotels: Observable<Hotel[]>;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    this.favoriteHotels = this.http.get<Hotel[]>(`${environment.api}/favorite`);
  }


  public get getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.api}/hotels`)
      .pipe(map(res => {
        this.currentHotel.next(res[0]);
        return res;
      }));
  }

  public getHotel(id: number): Observable<Hotel | null> {
    return this.http.get<Hotel>(`${environment.api}/hotels/${id}`);
  }

  public get getCurrentHotel(): Observable<Hotel> {
    return this.currentHotel;
  }

  public setCurrentHotel(hotel: Hotel) {
    this.currentHotel.next(hotel);
  }

  public get getFavoriteHotels(): Observable<Hotel[]> {
    return this.favoriteHotels;
  }

  public addToFavorite(hotel: Hotel): void {
    this.http.post<Hotel>(`${environment.api}/favorite`, hotel)
      .subscribe((res: Hotel) => {
        this.snackBar.open(`${res.title}` + ' was added to favorite list', 'Adding', {duration: 2000});
        // fixme adding to favorite hotels not renew frontend
        this.favoriteHotels.subscribe(h => {
          h.push(hotel);
          return h;
        });
      });
  }

  public deleteFromFavorites(id: number): void {
    this.http.delete<Hotel>(`${environment.api}/favorite/${id}`).subscribe((res: Hotel) => {
      this.snackBar.open(res.title + ' Successfully removed from favorite', 'Removing', {duration: 2000});
    });
  }

  public get getOptions(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api}/options`);
  }
}
