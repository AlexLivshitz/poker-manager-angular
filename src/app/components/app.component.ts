import { Component, OnDestroy } from '@angular/core';
import { GamesService } from "../services/game.service";

@Component({
  selector: 'app-root',
  template: `     
      <router-outlet></router-outlet>   
  `,
  providers: [GamesService]

})
export class AppComponent {}
