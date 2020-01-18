import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hotels: Hotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    }
  ];

  private currentHotel: BehaviorSubject<Hotel> = new BehaviorSubject<Hotel>(this.hotels[0]);
  private favoriteHotels: Hotel[] = new Array();
  private options: string[] = new Array('All', '3', '4', '5');

  constructor(private snackBar: MatSnackBar) {
    this.currentHotel.next(this.hotels[0]);
   }



  public get getHotels(): Observable<Hotel[]>   {
return of(this.hotels).pipe();
  }

  public get getCurrentHotel(): Observable<Hotel> {
return this.currentHotel;
}

  public setCurrentHotel(hotel: Hotel) {
    this.currentHotel.next(hotel);
  }

  public get getFavoriveHotels(): Observable<Hotel[]> {
    return of(this.favoriteHotels).pipe();
  }

  public addToFavorite(hotel: Hotel): void {
    this.favoriteHotels.push(hotel);
    // remove duplicated value in array
    this.favoriteHotels = Array.from(new Set(this.favoriteHotels));
    this.snackBar.open(hotel.title + ' was added to favorite list', 'Adding', {duration: 2000});
  }
  public get getOptions(): Observable<string[]>{
    return of(this.options).pipe();
  }
}
