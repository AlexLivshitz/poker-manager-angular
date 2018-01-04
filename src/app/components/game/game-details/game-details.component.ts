import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Game} from "../../../models/game";

@Component({
  selector: 'game-details',
  template: `
      <div>
          <div class="panel" >
              <div *ngIf="!isUpdateMode">
                  {{game.location}}  {{game.buyIn}} {{game.prize}}
                  <br/>
                  <button (click)="isUpdateMode=true">Update</button>
                  <button (click)="deleted.emit(game)">Delete</button>
              </div>
              <div *ngIf="isUpdateMode">
                  <input [(ngModel)]="game.location" >
                  <input [(ngModel)]="game.buyIn" >
                  <input [(ngModel)]="game.prize" >
                  <br/>
                  <button (click)="updated.emit(game)">Save</button>
                  <button (click)="onCancelClicked()">Cancel</button>
              </div>     


          </div>
      </div>
`,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class GameDetailsComponent implements OnInit {
  @Input('game') _game: Game;

  @Output() deleted: EventEmitter<Game> = new EventEmitter();
  @Output() updated: EventEmitter<Game> = new EventEmitter();

  isUpdateMode: boolean = false;
  originalGame: Game;
  game: Game;

  constructor() {

  }

  onCancelClicked(): void {
    this.game = Object.assign({}, this._game);
    this.isUpdateMode = false;
  }

  ngOnInit(): void {
    this.game = Object.assign({}, this._game);
    this.originalGame = Object.assign({}, this._game);

    //this.game = Object.assign({}, this._game);
  }

}
