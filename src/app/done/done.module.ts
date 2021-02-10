import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneService } from './done.service';
import { DoneComponent } from './done.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ DoneComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    DoneService
  ],
  exports: [
    DoneComponent
  ]
})
export class DoneModule { }
