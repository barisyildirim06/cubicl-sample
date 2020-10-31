import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(
		private accountService:AccountService,
	){}

	ngOnInit(): void {
	}

	isLoggedIn(){
	return this.accountService.isLoggedIn();
	
	}
	 logOut(){
	 return this.accountService.logOut();
	}
}
