import {Component, OnInit, Input} from '@angular/core';
import {Session} from "../session";

@Component({
  selector: 'session-item',
  template:`
 <div class="session-item accordion" (click)="onSelectSession(session)" [ngClass]="{active: showDetails(session)}">
    <span>{{session.location}}</span>&nbsp;{{session.buyIn}}&nbsp;{{session.prize}}
  </div>
  <div *ngIf="showDetails(session)">
    <session-details [session]="selectedSession"></session-details>
  </div>  
`

})
export class SessionItemComponent implements OnInit {
  @Input()
  session: Session;
  selectedSession: Session;
  private showDetailsFlag: boolean = false;

  constructor() { }

  onSelectSession(session: Session) : void {
    if (this.selectedSession != session) {
      this.selectedSession = session;
      this.showDetailsFlag = true;
    } else {
      this.showDetailsFlag = !this.showDetailsFlag;
    }
  }

  showDetails(currentSession: Session): boolean {
    return this.selectedSession == currentSession && this.showDetailsFlag;
  }

  ngOnInit() {
  }

}
