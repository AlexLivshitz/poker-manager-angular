import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";
import {Session} from "../session";

@Component({
  selector: 'sessions-list',
  template: `
<div class="sessions-list">
  <add-session></add-session>
  <ul>
      <session-item  *ngFor="let session of sessions" [session] = session></session-item>      
  </ul>
</div>
`,
  providers: [SessionService]
})
export class SessionsListComponent implements OnInit {
  private sessions : Session[];
  private selectedSession : Session;
  private showDetailsFlag: boolean = false;

  constructor(private sessionService: SessionService) { }

  getSession(): void {
    this.sessionService.getSessions().then(sessions => {
      this.sessions = sessions});
  }



  ngOnInit() {
    this.getSession();
  }

}
