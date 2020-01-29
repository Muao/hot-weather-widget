import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

import { AboutComponent } from './components/about/about.component';
import { AclDirective } from './directives/acl.directive';

@NgModule({
  declarations: [MenuComponent, AboutComponent, AclDirective],
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
    MatPaginatorModule,
    MenuComponent,
    AboutComponent,
    AclDirective

  ]
})
export class SharedModule {}
