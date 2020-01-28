import {NotFoundComponent} from './not-found/not-found.component';
import {ListComponent} from './list/list.component';
import {AboutComponent} from './shared/components/about/about.component';
import {Routes} from '@angular/router';
import {CommentsComponent} from './hotels/hotel/components/comments/comments.component';
import {HotelContactsComponent} from './hotels/hotel/components/hotel-contacts/hotel-contacts.component';


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
    path: 'hotels',
    loadChildren: () => import('./hotels/hotel/hotel.module').then((mod) => mod.HotelModule)
  },
  {
    path: 'contacts',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./shared/components/contacts/contacts.module').then((mod) => mod.ContactsModule) // lazy load module and it's components
  },
  {
    // path: 'users', component: UsersComponent, canActivate: [UsersGuard]   --> it goes to users.module.ts
    path: 'users',
    loadChildren: () => import('./shared/components/users/users.module').then((mod) => mod.UsersModule)
  },
  {
    path: '**', component: NotFoundComponent// set strong in the end of configuration list
  }
];
