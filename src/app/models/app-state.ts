import { Game } from "./game";
import { GamesListState } from "./games-list.state";
import { UserState } from "./user-state";

export interface AppState {
	gamesListState: GamesListState;
	usersState: UserState;
	// gamesList: Game[];
	// selectedGame: Game;
}

