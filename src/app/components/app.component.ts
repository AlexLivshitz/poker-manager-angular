import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Game } from "../models/game";
import { GamesService } from "../services/game.service";
import { Store } from "@ngrx/store";
import { AppState } from "../models/app-state";

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <div class="sessions-list">
          <add-game></add-game>
          <games-list [games]="gamesList$ | async"
                      [selectedGame]="selectedGame$ | async"
                      (selected)="onGameSelected($event)">
          </games-list>
      </div>
  `,
  providers: [GamesService]

})
export class AppComponent {
  title = 'Manager';

  gamesList$: Observable<Array<Game>>;
  selectedGame$: Observable<Game>;

  constructor(private gamesService: GamesService, private store: Store<AppState>) {
    this.gamesList$ = gamesService.gamesList$;
    this.selectedGame$ = store.select("selectedGame");
    this.selectedGame$.subscribe(x=> console.log(x));

    this.gamesService.loadGames();
  }

  onGameSelected(game): void {
    this.store.dispatch({type: "SELECT_GAME", payload: game});
  }

}
