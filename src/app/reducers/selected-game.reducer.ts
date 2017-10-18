


export const selectedGame = (state: any = [], {type, payload}) => {
	switch (type) {
		case "SELECT_GAME":
			return payload;
		default:
			return state;
	}
};