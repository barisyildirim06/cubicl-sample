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
	checkIsEmpty = true
	loggedIn = false;
	//This is login function which is only triggered when user logged in.
	login(user:User){
		this.alertify.success("login successful")
		this.loggedIn = true;
		localStorage.setItem("isLogged", user.username)
		this.router.navigate([""]);
	}
	//This function return boolean to validate whether user is logged in or not.
	isLoggedIn(){
		return this.loggedIn;
	}
	// This function is controlling whether user has an account or not. 
	control(){
		this.checkIsEmpty = false;
	}
	//This function return boolean to validate whether user has an account or not.
	isEmpty(){
		return this.checkIsEmpty
	}
	//This function is for logout. IT removes logged user from local storage.
	logOut(){
		this.alertify.success("logout successful")
		localStorage.removeItem("isLogged");
		this.loggedIn = false;
	}
}
