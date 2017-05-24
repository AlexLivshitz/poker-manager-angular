import { Injectable } from '@angular/core';
import {Session} from "./session";
import {SESSIONS} from './mock-sessions'

@Injectable()
export class SessionService {

  constructor() { }

  getSessions(): Promise<Session[]> {
    return Promise.resolve(SESSIONS);
  }

  addSession(session: Session): void {
    SESSIONS.push(session);
  }

  deleteSession(session: Session): void {
    var index = SESSIONS.indexOf(session, 0);
    if (index > -1) {
      SESSIONS.splice(index, 1);
    }
  }

}
