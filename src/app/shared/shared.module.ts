import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AclDirective } from './directives/acl.directive';

@NgModule({
  declarations: [MenuComponent, HotelsComponent, AboutComponent, UsersComponent, ContactsComponent, AclDirective],
  imports: [
    CommonModule,
    RouterModule // for routerLink working on menu.html
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MenuComponent,
    AboutComponent,
    ContactsComponent,
    HotelsComponent,
    UsersComponent,
    AclDirective

  ]
})
export class SharedModule {}
