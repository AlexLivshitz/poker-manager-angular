
// The "gamesListReducer" reducer performs actions on our games list of items
import { Observable } from "rxjs/Observable";



export const games = (state: any = [],  {type, payload}) => {
	switch (type) {
		case "ADD_GAMES":
			return payload;

		case "CREATE_GAME":
			return [...state, payload];

		case "UPDATE_GAME":
			return state.map(game => game.id === payload.id ? Object.assign({}, state, game) : game);

		case "DELETE_GAME":
			return state.filter(game => game.id !== payload.id);

		default:
			return state;
	}
};