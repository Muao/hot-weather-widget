import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { Routes } from '@angular/router';

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
  path: 'contacts', component: ContactsComponent
  },
  {
  path: 'users', component: UsersComponent
  },
  {
    path: '**', component: NotFoundComponent// set strong in the end of configuration list
  }
];
