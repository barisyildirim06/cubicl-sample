import Dexie from 'dexie'
import {Injectable} from '@angular/core'
import {User} from './model'


@Injectable()
export class DatabaseService{
	db:Dexie;

	constructor(){
		this.db=new Dexie('BankDatabase');
		this.db.version(1).stores({
			users: '++id,email,&username',
			
		})
	}

	saveUser(user :User):Promise<any>{
		return(this.db['users'].put(user)
		.then(()=>{
			return ({
				status: true,
				msg: "saved"
			})
		})
		.catch((err)=>{
			return ({
				status:false,
				msg:"error"
			})
		})
	);
	}

	loadUsers():Promise<User[]>{
		return(
			this.db['users'].orderBy('username').toArray()
		);
	}
}