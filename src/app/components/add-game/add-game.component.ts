import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Game} from "../../models/game";
import { GamesService } from "../../services/game.service";

@Component({
  selector: 'add-game',
  template: `
      <div class="add-game">
          <button class="accordion" [ngClass]="{active: showDetails}" (click)="switchDetailsState()">Add Game</button>
          <div class="panel" [ngClass]="{hidden: !showDetails}">
              <input type="text" [(ngModel)]="game.location" placeholder="Location">
              <input type="number" [(ngModel)]="game.buyIn" placeholder="Buy In">
              <input type="number" [(ngModel)]="game.prize" placeholder="Prize">
              <button (click)="added.emit(game)">ADD</button>
          </div>
      </div>
  `
})
export class AddGameComponent implements OnInit {

  @Output() added: EventEmitter<Game> = new EventEmitter();

  private showDetails: boolean = false;
  private game: Game = new Game();

  constructor(private gamesService: GamesService) {
    this.game = new Game();
  }

  switchDetailsState(): void {
    this.showDetails = !this.showDetails;
  }

  addSession() : void {
    this.gamesService.addGame(Object.assign({}, this.game));
  }

  ngOnInit() {

  }

}
