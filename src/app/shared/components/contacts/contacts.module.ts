import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {RouterModule} from '@angular/router';
import {ContactGuard} from '../../guards/contact.guard';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ContactsComponent, canDeactivate: [ContactGuard] // for check - http://localhost:4200/#/contacts?editMode=true
      }
      ]
    )
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
