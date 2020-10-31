import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model'
import {DatabaseService} from '../services/db.service'
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	@ViewChild('form')form:NgForm;

	constructor(
		private dbService:DatabaseService,
		private alertify: AlertifyService,
		private router: Router
	){}


	users: User[]=[];

	ngOnInit(){
		this.dbService.loadUsers()
		.then((users:User[])=>{
			console.info('Add from db :',users)
			this.users= users;
		})
		.catch((err)=>{
			console.log(err)
		})
	}


	registerForm(){
		let user: User;
		user = this.form.value;
		if(this.users.find(x=> x.username == user.username)){
			this.alertify.error("user already registered")
		}else {
			this.dbService.saveUser(user)
			.then(()=>{
				this.alertify.success("user registeration is successful")
				this.users.push(user);
				this.router.navigate(["login"]);
			})
			.catch((err)=>{
				console.error("Error",err)
			})
			this.form.resetForm();
		}
	}
}
