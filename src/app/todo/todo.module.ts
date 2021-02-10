import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from './todo.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ TodoComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
