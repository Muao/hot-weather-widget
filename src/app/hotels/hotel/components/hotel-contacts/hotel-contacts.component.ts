import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../../../servises/data.service';

@Component({
  selector: 'app-hotel-contacts',
  templateUrl: './hotel-contacts.component.html',
  styleUrls: ['./hotel-contacts.component.css']
})
export class HotelContactsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

  public hotel: Hotel;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((data: ParamMap) => {
      this.dataService.getHotel(Number(data.get('hotelid'))).subscribe(res => { // 'hotelid set in routes.ts
        this.hotel = res;
        console.log(this.hotel);
      });
    });
  }

}
