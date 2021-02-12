import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoModule } from './todo/todo.module';
import { DoingModule } from './doing/doing.module';
import { DoneModule } from './done/done.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TodoModule,
    DoingModule,
    DoneModule,
    NavBarModule,
    NgxSmartModalModule.forChild(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
