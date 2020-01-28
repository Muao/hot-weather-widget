import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../../../servises/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

  public hotel: Hotel;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((data: ParamMap) => {
      this.dataService.getHotel(Number(data.get('hotelid'))).subscribe(res => { // 'hotelid set in routes.ts
        this.hotel = res;
      });
    });
  }

}
