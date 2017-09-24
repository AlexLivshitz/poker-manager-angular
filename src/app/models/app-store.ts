import { Game } from "./game";

export interface AppStore {
	games: Game[];
	selectedGame: Game;
	gameSelected: boolean;
}