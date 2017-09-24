import {Component, OnInit, Input} from '@angular/core';
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'session-details',
  template: `
<div>
    <!--<div class="panel" >-->
        <!--{{session.location}} <button (click)="deleteSession(session)">Delete</button>-->
    <!--</div>      -->
    <div class="panel" >
        {{session.location}} <button (click)="deleteSession(session)">Delete</button>
    </div>    
</div>

`,
  providers: [GameService]
})
export class SessionDetailsComponent implements OnInit {
  @Input() session: Game;
  //@Input('game') _game: Game;

  private selectedGame: Game;
  constructor(private sessionService: GameService) { }

  // Every time the "game" input is changed, we copy it locally (and keep the original name to display)
  // set game(value: Game) {
  //    if(value)
  //        this.selectedGame = Object.assign({}, value);
  // }

  deleteSession(session: Game): void {
    this.sessionService.deleteSession(session);
    delete this.session;
  }

  ngOnInit() {
  }

}
