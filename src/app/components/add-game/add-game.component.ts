import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game";
import { GamesService } from "../../services/game.service";

@Component({
  selector: 'add-game',
  template: `
      <div class="add-game">
          <button class="accordion" [ngClass]="{active: showDetails}" (click)="switchDetailsState()">Add Session</button>
          <div class="panel" [ngClass]="{hidden: !showDetails}">
              <input type="text" [(ngModel)]="session.location" placeholder="Location">
              <input type="number" [(ngModel)]="session.buyIn" placeholder="Buy In">
              <input type="number" [(ngModel)]="session.prize" placeholder="Prize">
              <button (click)="addSession()">ADD</button>
          </div>
      </div>
  `,
  styleUrls: [ './add-game.component.css'],
})
export class AddGameComponent implements OnInit {

  private showDetails: boolean = false;
  private session: Game;

  constructor(private gamesService: GamesService) {
    this.session = new Game();
  }

  switchDetailsState(): void {
    this.showDetails = !this.showDetails;
  }

  addSession() : void {
    //this.sessionService.addSession(this.session);
    this.gamesService.addGame(Object.assign({}, this.session));
  }

  ngOnInit() {

  }

}
