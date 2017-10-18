
import { Game } from "./game";

export class GamesListState {
	gamesList: Game[];
	selectedGame: Game;
	showGameDetails: boolean = false;
}