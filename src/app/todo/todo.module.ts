import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from './todo.service';
import { MatButtonModule } from '@angular/material/button';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TodoComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NavBarModule,
    NgxSmartModalModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
