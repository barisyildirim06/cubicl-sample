import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model'
import {DatabaseService} from '../services/db.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	@ViewChild('form')form:NgForm;

	constructor(private dbService:DatabaseService){}

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
			alert("user zaten kayıtlı")
		}else {
			this.dbService.saveUser(user)
			.then(()=>{
				console.log('Saved!')
				this.users.push(user);
			})
			.catch((err)=>{
				console.error("Error",err)
			})
			this.form.resetForm();
		}
	}
}
