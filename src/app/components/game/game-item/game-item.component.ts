import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Game } from "../../../models/game";
import { Store } from "@ngrx/store";
import { AppState } from "../../../models/app-state";

@Component({
	selector: 'game-item',
	styleUrls: [ './game-item.component.scss' ],
	template: `
        <div class="session-item accordion" (click)="selected.emit(game)"
             [ngClass]="{active: showCurrentGameDetails()}">
			<div class="headers">	
            	<span class="buy-in">{{game.buyIn}}</span>
          	  	<span class="prize">{{game.prize}}</span>
            	<span class="summary {{getSummaryClass()}}">{{game.prize-game.buyIn}}</span>
			</div>
        </div>
        <div *ngIf="showCurrentGameDetails()">
            <game-details [game]="selectedGame"
                          (updated)="updated.emit($event)"
                          (deleted)="deleted.emit($event)">
            </game-details>
        </div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameItemComponent {
	@Input() game: Game;
	@Input() selectedGame: Game;
	@Input() showGameDetails: boolean;

	@Output() deleted                      = new EventEmitter();
	@Output() updated: EventEmitter<Game>  = new EventEmitter();
	@Output() selected: EventEmitter<Game> = new EventEmitter();

	showCurrentGameDetails(): boolean {
		return this.showGameDetails && this.game.id === this.selectedGame.id;
	}

	getSummaryClass(): string {
		if(!this.game)
			return '';

		return this.game.prize - this.game.buyIn >= 0 ? 'positive' : 'negative';
	}
}
