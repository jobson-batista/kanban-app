import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneService } from './done.service';
import { DoneComponent } from './done.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ DoneComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgxSmartModalModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DoneService
  ],
  exports: [
    DoneComponent
  ]
})
export class DoneModule { }
