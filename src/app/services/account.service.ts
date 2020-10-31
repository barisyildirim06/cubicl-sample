import { Injectable } from '@angular/core';
import {User} from '../model'
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

	constructor(
		private alertify: AlertifyService,
		private router: Router
		){}

	user: User[]=[];

	loggedIn = false;
	login(user:User){
		this.alertify.success("login successful")
		this.loggedIn = true;
		localStorage.setItem("isLogged", user.username)
		this.router.navigate([""]);
	}
	
	isLoggedIn(){
		return this.loggedIn;
	}

	logOut(){
		this.alertify.success("logout successful")
		localStorage.removeItem("isLogged");
		this.loggedIn = false;
	}
}
