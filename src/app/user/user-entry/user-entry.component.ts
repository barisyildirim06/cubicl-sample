import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../../model'

@Component({
	selector: 'app-user-entry',
	templateUrl: './user-entry.component.html',
	styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {

	@ViewChild('form')form:NgForm;

	@Output()newUser= new EventEmitter<User>();

	constructor() { }

	ngOnInit() {
	}

	processForm(){
		let user: User;
		user = this.form.value;
		console.log(">>",user);
		this.newUser.next(user);
		this.form.resetForm();
	}

}
