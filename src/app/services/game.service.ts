import { Injectable } from '@angular/core';
import { Game} from "../models/game";
import { SESSIONS} from '../mocks/mock-sessions'
import { Observable } from "rxjs/Observable";

import { AppState } from "../models/app-state";
import { Store } from "@ngrx/store";
import { GamesListActions } from "../reducers/game-list.reducer";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {

  constructor() { }

  getSessions(): Promise<Game[]> {
    return Promise.resolve(SESSIONS);
  }

  addSession(session: Game): void {
    SESSIONS.push(session);
  }

  deleteSession(session: Game): void {
    var index = SESSIONS.indexOf(session, 0);
    if (index > -1) {
      SESSIONS.splice(index, 1);
    }
  }

}

const BASE_URL = 'http://localhost:3000/gamesList/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
  gamesList$: Observable<Array<Game>>;

  constructor(private store: Store<AppState>, private http: Http) {
    this.gamesList$ = store.select("gamesList");
    this.gamesList$.subscribe(x => console.log('gamesList$' + x));
  }

  loadGames(): void {
    this.http.get(BASE_URL)
      .map(response => response.json())
      .map(payload => ({ type: GamesListActions.LOAD_GAMES, payload: payload }))
      .subscribe(action => this.store.dispatch(action))

    //this.store.dispatch({type: GamesListActions.LOAD_GAMES, payload: SESSIONS});
  }

  addGame(game: Game): void {
    this.http.post(BASE_URL, JSON.stringify(game), HEADER)
      .map(response => response.json())
      .map(payload => ({ type: GamesListActions.ADD_GAME, payload: payload }))
      .subscribe(action => this.store.dispatch(action))

    //this.store.dispatch({type: GamesListActions.ADD_GAME, payload: game});
  }

  updateGame(game: Game): void {
    this.http.put(BASE_URL, JSON.stringify(game), HEADER)
		.map(response => response.json())
		.map(payload => ({ type: GamesListActions.ADD_GAME, payload: payload }))
		.subscribe(action => this.store.dispatch(action))
  }


}