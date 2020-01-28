import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../../servises/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

 public editMode: boolean;

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      this.editMode = data.editMode;
    });
  }

  public canDeactivate(): boolean {
    alert('You have unsaved data.');
    return false;
  }

}
