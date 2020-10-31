import { Injectable } from '@angular/core';
import {DatabaseService} from './db.service'
import {User} from '../model'
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class AccountService {

	constructor(
		private alertify: AlertifyService,
		private dbService:DatabaseService
		){}

	user: User[]=[];

	loggedIn = false;
	login(user:User){
		this.loggedIn = true;
		localStorage.setItem("isLogged", user.username)
		console.log("local storage added")
	}
	
	isLoggedIn(){
		return this.loggedIn;
	}

	logOut(){
		localStorage.removeItem("isLogged");
		this.loggedIn = false;
	}
}
