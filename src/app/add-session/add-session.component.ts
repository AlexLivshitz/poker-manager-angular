import { Component, OnInit } from '@angular/core';
import {Session} from "../session";
import {SessionService} from "../session.service";

@Component({
  selector: 'add-session',
  template: `
<div class="add-session">
  <button class="accordion" [ngClass]="{active: showDetails}" (click)="switchDetailsState()">Add Session</button>
  <div class="panel" [ngClass]="{hidden: !showDetails}" >  
    <input type="text" [(ngModel)]="session.location" placeholder="Location">
    <input type="number" [(ngModel)]="session.buyIn" placeholder="Buy In">
    <input type="number" [(ngModel)]="session.prize" placeholder="Prize">    
    <button (click)="addSession()">ADD</button>
  </div>    
</div>
`,
  styleUrls: ['./add-session.component.css'],
  providers: [SessionService]
})
export class AddSessionComponent implements OnInit {

  private showDetails: boolean = false;
  private session: Session;

  constructor(private sessionService: SessionService) {
    this.session = new Session();
  }

  switchDetailsState(): void {
    this.showDetails = !this.showDetails;
  }

  addSession() : void {
    this.sessionService.addSession(this.session);
  }

  ngOnInit() {

  }

}
