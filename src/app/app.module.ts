import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { gamesListReducer } from './reducers/game-list.reducer'
import { selectedGameReducer } from './reducers/selected-game.reducer'


import { AppComponent } from './components/app.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { SessionDetailsComponent } from './components/game-details/game-details.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { GameItemComponent } from './components/game-item/game-item.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    AddGameComponent,
    SessionDetailsComponent,
    ReversePipe,
    GameItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({gamesList: gamesListReducer, selectedGame: selectedGameReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }