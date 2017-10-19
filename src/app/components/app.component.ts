import { Component, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Game } from "../models/game";
import { GamesService } from "../services/game.service";
import { Store } from "@ngrx/store";
import { AppState } from "../models/app-state";
import { GamesListActions, getGamesList, getGamesListState, getSelectedGame } from "../reducers/game-list.reducer";
import { GamesListState } from "../models/games-list.state";
import { Subscription } from "rxjs/Subscription";
import { noUndefined } from "@angular/compiler/src/util";
import { isUndefined } from "util";

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <div class="sessions-list">
          <add-game (added)="onGameAdded($event)"></add-game>          
          <games-list [gamesList]="gamesList$ | async"
                      [selectedGame]="selectedGame$ | async"
                      [showGameDetails] = showGameDetails
                      (selected)="onGameSelected($event)"
                      (updated)="onGameUpdated($event)"
                      (deleted)="onGameDeleted($event)"   >
          </games-list>
      </div>
  `,
  providers: [GamesService]

})
export class AppComponent implements OnDestroy{
  title = 'Manager';
  selectedGame: Game;
  showGameDetails: boolean;

  gamesListSubscription: Subscription;
  gamesList$: Observable<Array<Game>>;
  selectedGame$: Observable<Game>;

  constructor(private gamesService: GamesService, private store: Store<AppState>) {
    this.gamesList$ = store.select(getGamesList);
    this.selectedGame$ = store.select(getSelectedGame);
    
    this.gamesListSubscription = store.select(getGamesListState)
      .subscribe((state: GamesListState) => {
        this.selectedGame = state.selectedGame;
        this.showGameDetails = state.showGameDetails;
    });

    this.gamesService.loadGames()
		.map(response => ({ type: GamesListActions.LOAD_GAMES, payload: response.payload }))
		.subscribe(action => this.store.dispatch(action))
  }


  onGameSelected(game: Game): void {
    if (this.selectedGame !== undefined && this.selectedGame.id === game.id) {
      this.store.dispatch({type: GamesListActions.DESELECT_GAME});
      this.store.dispatch({ type: GamesListActions.HIDE_GAME_DETAILS });
    }
    else {
      this.store.dispatch({type: GamesListActions.SELECT_GAME, payload: game});
      this.store.dispatch({ type: GamesListActions.SHOW_GAME_DETAILS });
    }
  }

  onGameAdded(game: Game) {
    this.gamesService.addGame(Object.assign({}, game))
		.map((response) => ({ type: GamesListActions.ADD_GAME, payload: response.payload }))
        .subscribe(action => this.store.dispatch(action));
  }

  onGameDeleted(game): void {
      this.gamesService.deleteGame(game)
        .subscribe(() => this.store.dispatch({type: GamesListActions.DELETE_GAME, payload: game}))
  }

  onGameUpdated(game): void {
    //this.gamesService.updateGame(game);
    this.store.dispatch({type: GamesListActions.UPDATE_GAME, payload: game});
  }

  ngOnDestroy() {
    this.gamesListSubscription.unsubscribe();
  }
}
