import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {ContactsComponent} from '../components/contacts/contacts.component';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanDeactivate<ContactsComponent> {
  canDeactivate(
    component: ContactsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    return component.editMode ? component.canDeactivate() : true;
  }


}
