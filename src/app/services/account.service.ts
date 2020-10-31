import { Injectable } from '@angular/core';
import {DatabaseService} from './db.service'
import {User} from '../model'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
}
