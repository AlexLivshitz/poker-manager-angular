import { Injectable } from '@angular/core';
import {Game} from "../models/game";
import {SESSIONS} from '../mocks/mock-sessions'
import { Observable } from "rxjs/Observable";

import { AppStore } from "../models/app-store";
import { Store } from "@ngrx/store";

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

@Injectable()
export class GamesService {
  games$: Observable<Array<Game>>;

  constructor(private store: Store<AppStore>) {
    this.games$ = store.select("games");
    this.games$.subscribe(x => console.log(x));
  }

  loadGames(): void {
    this.store.dispatch({type: "ADD_GAMES", payload: SESSIONS});
  }

  addGame(game: Game): void {
    this.store.dispatch({type: "CREATE_GAME", payload: game});
  }

}