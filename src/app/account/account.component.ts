import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, Account } from '../model'
import {DatabaseService} from '../services/db.service'
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

	@ViewChild('form')form:NgForm;

	constructor(
		private dbService:DatabaseService,
		private accountService: AccountService,
		private alertify: AlertifyService,
		private router: Router
	){}
	// Date Picker
	dateNow = Date.now();
	users: User[]=[];
	loggedUser: string ;
	accounts: Account[]=[];
	isEmptyy: boolean = true;


	async ngOnInit(): Promise<any>{
		this.loggedUser = localStorage.getItem("isLogged").toString();
		console.log(this.loggedUser.toString());
		await this.dbService.loadAccounts()
		.then((accounts:Account[])=>{
			this.accounts= accounts;
		})
		.catch((err)=>{
			console.log(err)
		})
		// If User already have account, this will be triggered.
		if(this.accounts.find(x=> x.username==this.loggedUser)){
			this.accountService.control()
		}
	}

	//Check if user already have an account or not.
	isEmpty(){
		return this.accountService.isEmpty()
	}

	//This form only triggered when user sends an valid account form
	accountForm(){
		let account: Account;
		account = this.form.value;
		account.username = this.loggedUser;
		account.timestamp = this.dateNow;
		console.log(account)
		this.dbService.saveAccount(account)
		.then(()=>{
			this.alertify.success("Account is successfully created")
			this.accounts.push(account);
			this.router.navigate([""]);
		})
		.catch((err)=>{
			console.error("Error",err)
		})

		}
}
