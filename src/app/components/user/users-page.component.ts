import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'users',
	template: `
        <h1>{{title}}</h1>
        <button (click)="redirectToGames()">Games</button>
        <div class="sessions-list">
            <add-user (added)="onUserAdded()"></add-user>
        </div>
	`
})
export class UsersComponent {
	title: string = "Users";

	constructor(private router: Router) {
	}

	onUserAdded() {

	}

	redirectToGames() {
		this.router.navigate(['/games']);
	}
}
