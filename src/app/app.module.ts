import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { gamesListState } from './reducers/game-list.reducer'
import { selectedGame } from './reducers/selected-game.reducer'


import { AppComponent } from './components/app.component';
import { GamesListComponent } from './components/game/games-list/games-list.component';
import { AddGameComponent } from './components/game/add-game/add-game.component';
import { GameDetailsComponent } from './components/game/game-details/game-details.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { GameItemComponent } from './components/game/game-item/game-item.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { GamesPageComponent } from './components/game/games-page/games-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { UsersComponent } from './components/user/users-page.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';


@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		StoreModule.provideStore({ gamesListState }),
		StoreDevtoolsModule.instrumentOnlyWithExtension([]),
	],
	declarations: [
		AppComponent,
		GamesListComponent,
		AddGameComponent,
		GameDetailsComponent,
		ReversePipe,
		GameItemComponent,
		GamesPageComponent,
		UsersComponent,
		AddUserComponent
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}