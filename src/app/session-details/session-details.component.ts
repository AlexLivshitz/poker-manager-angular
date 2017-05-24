import {Component, OnInit, Input} from '@angular/core';
import {Session} from "../session";
import {SessionService} from "../session.service";

@Component({
  selector: 'session-details',
  template: `
<div>
    <div class="panel" >
        {{session.location}} <button (click)="deleteSession(session)">Delete</button>
    </div>    
</div>

`,
  styleUrls: ['./session-details.component.css'],
  providers: [SessionService]
})
export class SessionDetailsComponent implements OnInit {
  @Input()
  private session: Session;

  constructor(private sessionService: SessionService) { }

  deleteSession(session: Session): void {
    this.sessionService.deleteSession(session);
    delete this.session;
  }

  ngOnInit() {
  }

}
