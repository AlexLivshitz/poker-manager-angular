import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../models/app-state";
import { Observable } from "rxjs/Observable";
import { User } from "../../models/user";

@Component({
	selector: 'app-users-page',
	template: `
        <h1>{{title}}</h1>
        <button (click)="redirectToGames()">Games</button>
        <div class="sessions-list">
            <add-user (added)="onUserAdded()"></add-user>
        </div>
		<!--<users-list ></users-list>-->
	`
})
export class UsersComponent {
	title: string = "Users";
	users$: Observable<Array<User>>;

	constructor(private router: Router, private store: Store<AppState>) {

	}

	onUserAdded() {

	}

	redirectToGames() {
		this.router.navigate(['/games']);
	}
}
