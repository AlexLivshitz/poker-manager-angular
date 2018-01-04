import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from "../../../models/game";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "../../../models/app-state";

@Component({
  selector: 'games-list',
  template: `
      <div>
          <ul>
              <game-item *ngFor="let game of gamesList"
                         [game]="game" 
                         [selectedGame]="selectedGame"
                         [showGameDetails]="showGameDetails"
                         (selected)="selected.emit($event)"
                         (deleted)="deleted.emit($event)"
                         (updated)="updated.emit($event)"   >
              </game-item>
          </ul>
      </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesListComponent {
  @Input() gamesList: Game[];
  @Input() selectedGame: Game;
  @Input() showGameDetails: boolean;

  @Output() selected: EventEmitter<Game> = new EventEmitter();
  @Output() deleted: EventEmitter<Game> = new EventEmitter();
  @Output() updated: EventEmitter<Game> = new EventEmitter();
}
