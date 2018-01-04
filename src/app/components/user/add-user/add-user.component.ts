import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GamesService } from "../../../services/game.service";
import { User } from "../../../models/user";

@Component({
	selector: 'add-user',
	template: `
      <div class="add-game">
          <button class="accordion" [ngClass]="{active: showDetails}" (click)="switchDetailsState()">Add User</button>
          <div class="panel" [ngClass]="{hidden: !showDetails}">
              <input type="text" [(ngModel)]="user.name" placeholder="Name">             
              <button (click)="added.emit(game)">ADD</button>
          </div>
      </div>
  `
})
export class AddUserComponent {

	@Output() added: EventEmitter<User> = new EventEmitter();

	private showDetails: boolean = false;
	private user: User = new User();

	constructor() {
	}

	switchDetailsState(): void {
		this.showDetails = !this.showDetails;
	}

}
