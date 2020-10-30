import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../app/model'
import {DatabaseService} from './db.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'cubicl-sample';

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
    console.log($event);
  }

  delete($event:string){
    console.log($event);
  }
}
