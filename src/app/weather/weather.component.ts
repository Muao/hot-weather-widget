import { DataService } from './../servises/data.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather: Weather;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.weather = this.dataService.getCurrentHotel.weather;
  }

}
