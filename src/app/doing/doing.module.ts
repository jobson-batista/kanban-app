import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DoingComponent } from './doing.component';
import { DoingService } from './doing.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ DoingComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    DoingComponent
  ],
  providers: [
    DoingService
  ]
})
export class DoingModule { }
