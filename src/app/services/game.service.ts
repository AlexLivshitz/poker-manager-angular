import { Injectable } from '@angular/core';
import { Game} from "../models/game";

import { AppState } from "../models/app-state";
import { Store } from "@ngrx/store";
import { GamesListActions, getGamesList, getGamesListState } from "../reducers/game-list.reducer";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://127.0.0.1:3000/gamesList';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
  constructor(private store: Store<AppState>, private http: Http) {

  }

  loadGames(): void {
    this.http.get(BASE_URL)
      .map(response => response.json())
      .map(payload => ({ type: GamesListActions.LOAD_GAMES, payload: payload }))
      .subscribe(action => this.store.dispatch(action))
  }

  addGame(game: Game): void {
    this.http.post(BASE_URL, JSON.stringify(game), HEADER)
      .map(response => response.json())
      .map(payload => ({ type: GamesListActions.ADD_GAME, payload: payload }))
      .subscribe(action => this.store.dispatch(action))
  }

  deleteGame(game: Game): void {
    this.http.delete(`${BASE_URL}/${game.id}`)
      .subscribe(() => this.store.dispatch({type: GamesListActions.DELETE_GAME, payload: game}))
  }

  updateGame(game: Game): void {
    this.http.put(BASE_URL, JSON.stringify(game), HEADER)
		.map(response => response.json())
		.map(payload => ({ type: GamesListActions.UPDATE_GAME, payload: payload }))
		.subscribe(action => this.store.dispatch(action))
  }


}