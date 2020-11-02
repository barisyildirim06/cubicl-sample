import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms'
import { DatabaseService } from './services/db.service';
import { AlertifyService } from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { AccountComponent } from './account/account.component';


@NgModule({
	declarations: [
		AppComponent,
		UserComponent,
		RegisterComponent,
		NavbarComponent,
		LoginComponent,
		AccountComponent
	],
	imports: [
		BrowserModule, 
		FormsModule,
		AppRoutingModule
	],
	providers: [
		DatabaseService,
		AlertifyService,
		AccountService,
		LoginGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
