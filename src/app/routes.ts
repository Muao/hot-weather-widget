import {HotelComponent} from './hotels/hotel/hotel.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UsersComponent} from './shared/components/users/users.component';
import {ListComponent} from './list/list.component';
import {AboutComponent} from './shared/components/about/about.component';
import {ContactsComponent} from './shared/components/contacts/contacts.component';
import {Routes} from '@angular/router';
import {CommentsComponent} from './hotels/hotel/components/comments/comments.component';
import {HotelContactsComponent} from './hotels/hotel/components/hotel-contacts/hotel-contacts.component';
import {UsersGuard} from './shared/guards/users.guard';

export const routes: Routes = [
  {
    path: '', redirectTo: 'hotels', pathMatch: 'full'
  },
  {
    path: 'hotels', component: ListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'hotels/:hotelid', component: HotelComponent
  },
  {
    path: 'hotels/:hotelid/comments', component: CommentsComponent
  },
  {
    path: 'hotels/:hotelid/hotelContacts', component: HotelContactsComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'users', component: UsersComponent, canActivate: [UsersGuard]
  },
  {
    path: '**', component: NotFoundComponent// set strong in the end of configuration list
  }
];
