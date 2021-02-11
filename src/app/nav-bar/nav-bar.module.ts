import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CardEditComponent } from './card-edit/card-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ NavBarComponent, CardEditComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    NgxSmartModalModule.forChild(),
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
