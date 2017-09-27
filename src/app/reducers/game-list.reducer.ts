
// The "gamesListReducer" reducer performs actions on our games list of items
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";

export const GamesListActions = {
	LOAD_GAMES: 'LOAD_GAMES',
	ADD_GAME: 'ADD_GAME',
	UPDATE_GAME: 'UPDATE_GAME',
	DELETE_GAME: 'DELETE_GAME'
}


export const gamesListReducer = (state: any = [], action: Action) => {
	switch (action.type) {
		case GamesListActions.LOAD_GAMES:
			return action.payload;

		case GamesListActions.ADD_GAME:
			return [...state, action.payload];

		case GamesListActions.UPDATE_GAME:
			return state.map(game => game.id === action.payload.id ? Object.assign({}, state, game) : game);

		case GamesListActions.DELETE_GAME:
			return state.filter(game => game.id !== action.payload.id);

		default:
			return state;
	}
};