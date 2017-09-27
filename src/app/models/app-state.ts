import { Game } from "./game";

export interface AppState {
	gamesList: Game[];
	selectedGame: Game;
}