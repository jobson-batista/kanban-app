import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DoingComponent } from './doing.component';
import { DoingService } from './doing.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ DoingComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgxSmartModalModule.forChild(),
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    DoingComponent
  ],
  providers: [
    DoingService
  ]
})
export class DoingModule { }
