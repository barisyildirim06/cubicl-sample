import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core"
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(
		private accountService: AccountService,
		private router: Router
	) { }
	// When user is not logged in Login Guard automatically navigates to login page.
	// When user is logged in, user can navigate to the page that is requested.
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let logged = this.accountService.isLoggedIn();
		if(logged){
			return true;
		}
		this.router.navigate(["login"]);
		return false;
	}
}