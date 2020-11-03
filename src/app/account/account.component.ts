import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/db.service'
import { User, Account } from '../model'
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
	})
	export class AccountComponent implements OnInit {

	constructor(
		private dbService:DatabaseService,
		private accountService: AccountService,
		private alertify: AlertifyService,
		private router: Router,
	) { }

	dateNow = Date.now();
	users: User[]=[];
	loggedUser: string ;
	accounts: Account[]=[];
	isEmptyy: boolean = true;
	selectedAmount:number ;
	accountForm:FormGroup;
	buttonDisabled: boolean;

	createAccountForm(){
		//When an account is selected, this will trigger.
		this.buttonDisabled = false;
		this.accountForm = new FormGroup({
			//Maximum value of amount determined by previous accounts.
			amount: new FormControl("", [ Validators.required, Validators.max(this.selectedAmount)]),
			accountName: new FormControl("", [ Validators.required]),
			currency: new FormControl("", [ Validators.required]),
			interestRate: new FormControl("", [ Validators.required]),
		});
	}
	

	async ngOnInit(): Promise<any>{
		//User identification.
		this.loggedUser = localStorage.getItem("isLogged").toString();
		//Loading previous accounts if there is any.
		this.createAccountForm();
		//Set Amount initially disabled.
		this.buttonDisabled = true;
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

	onFormSubmit(){
		if(this.accountForm.invalid){
			return
		}
		let account: Account;
		account = this.accountForm.value;
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

	get accountName() {
		return this.accountForm.get('accountName');
	 }

	 get amount() {
		return this.accountForm.get('amount');
	 }

	 get currency() {
		return this.accountForm.get('currency');
	 }

	 get interestRate() {
		return this.accountForm.get('interestRate');
	 }

}
