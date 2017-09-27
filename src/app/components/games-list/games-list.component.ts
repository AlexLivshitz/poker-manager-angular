import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService, GamesService } from "../../services/game.service";
import { Game } from "../../models/game";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "../../models/app-state";

@Component({
  selector: 'games-list',
  template: `
      <div>
          <!--<add-session></add-session>-->
          <ul>
              <!--<session-item  *ngFor="let session of sessions" [session] = session></session-item>   -->
              <!--<br>-->
              <game-item *ngFor="let game of games"
                         [game]="game"                         
                         (click)="selected.emit(game)">
              </game-item>
          </ul>
      </div>
  `,
  providers: [GameService]
})
export class GamesListComponent implements OnInit {
  private sessions : Game[];
  private selectedSession : Game;
  private showDetailsFlag: boolean = false;

  @Input() games: Game[];
  @Input() selectedGame: Game;

  @Output() selected: EventEmitter<any> = new EventEmitter();

  selectedGame$: Observable<Game>;


  constructor(private sessionService: GameService, private store: Store<AppState>) {
    // this.selectedGame$ = store.select("selectedGame");
  }

  getSessions(): void {
    // this.sessionService.getSessions().then(sessions => {
    //   this.sessions = sessions});
  }

  ngOnInit() {
    this.getSessions();
  }

}
