import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEntryComponent } from './user/user-entry/user-entry.component';
import {FormsModule} from '@angular/forms'
import { DatabaseService } from './db.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEntryComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
