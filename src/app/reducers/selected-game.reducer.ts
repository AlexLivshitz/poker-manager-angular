
// The "selectedGame" reducer performs actions on our game details of items
export const selectedGame = (state: any = [], {type, payload}) => {
	switch (type) {
		case "SELECT_ITEM":
			return payload;
		default:
			return state;
	}
};