import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {RouterModule} from '@angular/router';
import {UsersGuard} from '../../guards/users.guard';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UsersComponent, canActivate: [UsersGuard]
    }
    ])
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
