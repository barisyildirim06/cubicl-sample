import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model'
import { AccountService } from '../services/account.service';
import {DatabaseService} from '../services/db.service'
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('form')form:NgForm;

	constructor(
		private dbService:DatabaseService,
		private alertify: AlertifyService,
		private accountService:AccountService
	){}

	users: User[]=[];

	ngOnInit(){
		this.dbService.loadUsers()
		.then((users:User[])=>{
			this.users= users;
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	loggedIn = false;
	loginForm(){
		let user: User;
		user = this.form.value;
		if(this.users.find(x=> x.username == user.username)){
			if(this.users.find(x=> x.username == user.username).password == user.password){
				this.accountService.login(user);
			}else {
				this.alertify.error("check your password again")
			}
		}else {
			this.alertify.error("there is no such user")
		}
	}
}
