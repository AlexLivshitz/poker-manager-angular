import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Game } from "./models/game";
import { GamesService } from "./services/game.service";
import { Store } from "@ngrx/store";
import { AppStore } from "./models/app-store";

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <add-game></add-game>
      <games-list [games]="games$ | async"
                  [selectedGame]="selectedGame$ | async"
                  (selected)="onGameSelected($event)">
      </games-list>
  `,
  providers: [GamesService]

})
export class AppComponent {
  title = 'Manager';

  games$: Observable<Array<Game>>;
  selectedGame$: Observable<Game>;

  constructor(private gamesService: GamesService, private store: Store<AppStore>) {
    this.games$ = gamesService.games$;
    this.selectedGame$ = store.select("selectedGame");
    this.selectedGame$.subscribe(x=> console.log(x));

    this.gamesService.loadGames();
  }

  onGameSelected(game): void {
    this.store.dispatch({type: "SELECT_ITEM", payload: game});
  }

}
