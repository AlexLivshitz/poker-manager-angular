
// The "gamesListReducer" reducer performs actions on our game list of items
import { Observable } from "rxjs/Observable";
import { Action, ActionReducer } from "@ngrx/store";
import { AppState } from "../models/app-state";
import { createSelector } from "reselect";
import { GamesListState } from "../models/games-list.state";
import { Game } from "../models/game";

export const GamesListActions = {
	LOAD_GAMES: 'LOAD_GAMES',
	ADD_GAME: 'ADD_GAME',
	UPDATE_GAME: 'UPDATE_GAME',
	DELETE_GAME: 'DELETE_GAME',
	SELECT_GAME: 'SELECT_GAME',
	DESELECT_GAME: 'DESELECT_GAME',
	SHOW_GAME_DETAILS: 'SHOW_GAME_DETAILS',
	HIDE_GAME_DETAILS: 'HIDE_GAME_DETAILS'
}

export const gamesListState: ActionReducer<GamesListState> =
				 (state: GamesListState = new GamesListState(), action: Action) => {
	switch (action.type) {
		case GamesListActions.LOAD_GAMES:
			return Object.assign({}, state, {gamesList: action.payload} as GamesListState);

		case GamesListActions.ADD_GAME:
			return Object.assign({}, state, {}, {gamesList:  [...state.gamesList, action.payload]} as GamesListState)

		case GamesListActions.SELECT_GAME:
			return Object.assign({}, state, {selectedGame: action.payload} as GamesListState);

		case GamesListActions.DESELECT_GAME:
			return Object.assign({}, state, {selectedGame: undefined} as GamesListState);

		case GamesListActions.SHOW_GAME_DETAILS:
			return Object.assign({}, state, {showGameDetails: true} as GamesListState);

		case GamesListActions.HIDE_GAME_DETAILS:
			return Object.assign({}, state, {showGameDetails: false} as GamesListState);

		case GamesListActions.UPDATE_GAME:
			var updatedGamesList = state.gamesList.map((game) => game.id === action.payload.id ? action.payload : game)
			var temp = Object.assign({}, state, {gamesList: updatedGamesList} as GamesListState);
			return temp;

		case GamesListActions.DELETE_GAME:
			return Object.assign({}, state, {}, {gamesList:  state.gamesList.filter(game => game.id !== action.payload.id)} as GamesListState)

		default:
			return state;
	}
};


export const getGamesListState  = (state: AppState) => {
	return state.gamesListState;
}
export const getGamesList 		= createSelector(getGamesListState, (state: GamesListState) => {
	return state.gamesList
});
export const getSelectedGame	= createSelector(getGamesListState, (state: GamesListState) => {
	return state.selectedGame
});


