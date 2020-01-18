import { DataService } from './../servises/data.service';
import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getCurrentHotel.subscribe(res => {
     this.profile = res.profile;
   });
  }

}
