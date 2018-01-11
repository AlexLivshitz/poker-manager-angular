import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Game } from "../../../models/game";
import { GamesService } from "../../../services/game.service";
import { Action, Store } from "@ngrx/store";
import { AppState } from "../../../models/app-state";
import {
	GamesListActions,
	getGamesList,
	getGamesListState,
	getSelectedGame
} from "../../../reducers/game-list.reducer";
import { Subscription } from "rxjs/Subscription";
import { GamesListState } from "../../../models/games-list.state";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: 'app-root',
	styleUrls: [ './games-page.component.scss' ],
	template: `       
        <h1>{{title}}</h1>
		<button (click)="redirectToUser()">Users</button>
        <div class="sessions-list">
            <add-game (added)="onGameAdded($event)"></add-game>
			<div class="headers">
            	<span class="buy-in">Buy-in</span>
            	<span class="prize">Prize</span>
            	<span class="summary">Summary</span>
			</div>
            <games-list [gamesList]="gamesList$ | async | reverse"
                        [selectedGame]="selectedGame$ | async"
                        [showGameDetails]=showGameDetails
                        (selected)="onGameSelected($event)"
                        (updated)="onGameUpdated($event)"
                        (deleted)="onGameDeleted($event)">
            </games-list>
        </div>
	`,
	providers: [ GamesService ]
})
export class GamesPageComponent implements OnInit, OnDestroy {
	title          = 'Manager';
	selectedGame: Game;
	showGameDetails: boolean;

	gamesListSubscription: Subscription;
	gameIdParameterSubscription: Subscription;
	gamesList$: Observable<Array<Game>>;
	selectedGame$: Observable<Game>;

	constructor(private gamesService: GamesService, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
		this.gamesList$    = store.select(getGamesList);
		this.selectedGame$ = store.select(getSelectedGame);

		this.gamesListSubscription = store.select(getGamesListState)
			.subscribe((state: GamesListState) => {
				this.selectedGame    = state.selectedGame;
				this.showGameDetails = state.showGameDetails;
			});
	}

	ngOnInit(): void {
		this.gameIdParameterSubscription = this.route.params.subscribe(params => {
			let userId = +params['id']; // (+) converts string 'id' to a number
			if (isNaN(userId)) {
				this.gamesService.getAllGames()
					.map((response) => response.json())
					.subscribe((game: Game) => this.store.dispatch({ type: GamesListActions.LOAD_GAMES, payload: game }))
			} else {
				this.gamesService.getUserGames(userId)
					.map((response) => response.json())
					.subscribe((game: Game) => this.store.dispatch({ type: GamesListActions.LOAD_GAMES, payload: game }))
			}
		});
	}


	onGameSelected(game: Game): void {
		if (this.selectedGame !== undefined && this.selectedGame.id === game.id) {
			this.store.dispatch({ type: GamesListActions.DESELECT_GAME });
			this.store.dispatch({ type: GamesListActions.HIDE_GAME_DETAILS });
		}
		else {
			this.store.dispatch({ type: GamesListActions.SELECT_GAME, payload: game });
			this.store.dispatch({ type: GamesListActions.SHOW_GAME_DETAILS });
		}
	}

	onGameAdded(game: Game) {
		this.gamesService.addGame(Object.assign({}, game))
			.map(response => response.json())
			.subscribe(game => this.store.dispatch({ type: GamesListActions.ADD_GAME, payload: game }));
	}

	onGameUpdated(game): void {
		this.gamesService.updateGame(game)
			.map(response => response.json())
			.subscribe(game => this.store.dispatch({ type: GamesListActions.UPDATE_GAME, payload: game }))
	}

	onGameDeleted(game): void {
		this.gamesService.deleteGame(game)
			.subscribe(() => this.store.dispatch({ type: GamesListActions.DELETE_GAME, payload: game }))
	}

	redirectToUser() {
			this.router.navigate(["/"]);
	}

	ngOnDestroy() {
		this.gamesListSubscription.unsubscribe();
		this.gameIdParameterSubscription.unsubscribe();
	}


}
