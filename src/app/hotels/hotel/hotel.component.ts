import { DataService } from './../../servises/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

  public hotel: Hotel;
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((data: ParamMap) => {
      this.dataService.getHotel(Number(data.get('hotelid'))).subscribe(res => { // 'hotelid set in routes.ts
        this.hotel = res;
        console.log(res.title); // fixme use this hotel for setting on frontend
      });
    });
  }

  public addToFavorite(hotel: Hotel): void {
    this.dataService.addToFavorite(hotel);
  }

}
