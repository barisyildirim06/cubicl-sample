import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model'
import {DatabaseService} from '../services/db.service'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	  @Input() user: User;
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

	ngOnDestroy(){}

	processUser($event:User){
		this.dbService.saveUser($event)
		.then(()=>{
			console.log('Saved!')
			this.users.push($event);
		})
		.catch((err)=>{
			console.error("Error",err)
		})
		console.info('Add from db :',this.users)
	}

	delete($event:string){
		console.log($event);
	}
}
