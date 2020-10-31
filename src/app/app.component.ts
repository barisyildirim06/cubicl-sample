import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../app/model'
import {DatabaseService} from './services/db.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
	title = 'cubicl-sample';

	constructor(private dbService:DatabaseService){}

	users: User[]=[];

	ngOnInit(){}

	ngOnDestroy(){}

}
