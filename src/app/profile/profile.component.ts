import { DataService } from './../servises/data.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.profile = this.dataService.getCurrentHotel.profile;
  }

}
