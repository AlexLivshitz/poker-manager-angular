import { Game } from "./game";
import { GamesListState } from "./games-list.state";

export interface AppState {
	gamesListState: GamesListState;
	usersState: UsersState;
	// gamesList: Game[];
	// selectedGame: Game;
}

