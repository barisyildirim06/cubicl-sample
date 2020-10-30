import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {User} from '../model'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	@Input() user: User;
	constructor() { }

	ngOnInit() {
	}


}
