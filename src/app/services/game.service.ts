import { Injectable } from '@angular/core';
import { Game} from "../models/game";

import { AppState } from "../models/app-state";
import { Action, Store } from "@ngrx/store";
import { GamesListActions, getGamesList, getGamesListState } from "../reducers/game-list.reducer";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

const BASE_URL = 'http://127.0.0.1:3000/gamesList';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
  constructor(private store: Store<AppState>, private http: Http) {

  }

  loadGames(): Observable<any> {
    return this.http.get(BASE_URL);
  }

  addGame(game: Game): Observable<any> {
    return this.http.post(BASE_URL, JSON.stringify(game), HEADER)
      .map(response => response.json())
      .map(payload => ({ type: GamesListActions.ADD_GAME, payload: payload }))
      // .subscribe(action => this.store.dispatch(action))
  }

  deleteGame(game: Game): Observable<any> {
    return this.http.delete(`${BASE_URL}/${game.id}`);
  }

  updateGame(game: Game): void {
    this.http.put(BASE_URL, JSON.stringify(game), HEADER)
		.map(response => response.json())
		.map(payload => ({ type: GamesListActions.UPDATE_GAME, payload: payload }))
		.subscribe(action => this.store.dispatch(action))
  }

}