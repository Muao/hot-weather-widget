import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelComponent} from './hotel.component';
import {RouterModule} from '@angular/router';
import {CommentsComponent} from './components/comments/comments.component';
import {HotelContactsComponent} from './components/hotel-contacts/hotel-contacts.component';



@NgModule({
  declarations: [HotelComponent, CommentsComponent, HotelContactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':hotelid', component: HotelComponent
      },
      {
        path: ':hotelid/comments', component: CommentsComponent
      },
      {
        path: ':hotelid/hotelContacts', component: HotelContactsComponent
      },
    ])
  ], exports: [
    HotelComponent,
    CommentsComponent,
    HotelContactsComponent
  ]
})
export class HotelModule { }
