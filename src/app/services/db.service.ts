import Dexie from 'dexie'
import {Injectable} from '@angular/core'
import {User, Account} from '../model'


@Injectable()
export class DatabaseService{
	db:Dexie;
	users: User[]=[];
	accounts: Account[]=[];

	//Declaration of indexed database.
	constructor(){
		this.db=new Dexie('BankDatabase');
		this.db.version(1).stores({
			users: '++id,&username,password',
			accounts: '++id,username,accountName,amount,currency,interestRate,timestamp'
		})
	}

	// This function is created to save users to indexed database.
	saveUser(user :User):Promise<any>{
		if(this.db['users']){
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
	}
	
	// This function is created to save accounts to indexed database.
	saveAccount(account :Account):Promise<any>{
		if(this.db['accounts']){
			return(this.db['accounts'].put(account)
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
	}

	//This function is created to load usernames with an order of username.
	loadUsers():Promise<User[]>{
		return(
			this.db['users'].orderBy('username').toArray()
		);
	}
	//This function is created to load user accounts with an order of accountname.
	loadAccounts():Promise<Account[]>{
		return(
			this.db['accounts'].orderBy('accountName').toArray()
		);
	}
}