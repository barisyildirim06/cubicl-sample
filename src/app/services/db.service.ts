import Dexie from 'dexie'
import {Injectable} from '@angular/core'
import {User} from '../model'


@Injectable()
export class DatabaseService{
	db:Dexie;
	users: User[]=[];

	constructor(){
		this.db=new Dexie('BankDatabase');
		this.db.version(1).stores({
			users: '++id,&username,password',

		})
	}

	saveUser(user :User):Promise<any>{
		if(this.db['users'])
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