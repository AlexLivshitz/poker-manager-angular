import {Component, OnInit, Input} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  selector: 'game-item',
  template:`
 <div class="session-item accordion"  [ngClass]="{active: showDetails(session)}">
    <!--<span>{{session.location}}</span>&nbsp;{{session.buyIn}}&nbsp;{{session.prize}}-->
    <!--<span>{{session.location}}</span>&nbsp;{{session.buyIn}}&nbsp;{{session.prize}}-->
    <span>{{game.location}}</span>&nbsp;{{game.buyIn}}&nbsp;{{game.prize}}
  </div>
  <div *ngIf="showDetails(session)">
    <session-details [session]="selectedSession"></session-details>
  </div>  
`

})
export class GameItemComponent implements OnInit {
  @Input() session: Game;
  @Input() game: Game;
 // @Input() selectedSession: Game;
  private showDetailsFlag: boolean = false;

  constructor() { }


  // onSelectSession(session: Game) : void {
  //   if (this.selectedSession != session) {
  //     this.selectedSession = session;
  //     this.showDetailsFlag = true;
  //   } else {
  //     this.showDetailsFlag = !this.showDetailsFlag;
  //   }
  // }

  showDetails(currentSession: Game): boolean {
      return false;
    //return this.selectedSession == currentSession && this.showDetailsFlag;
  }

  ngOnInit() {
  }

}
