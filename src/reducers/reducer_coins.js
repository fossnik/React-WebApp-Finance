import { FETCH_COIN_INDEX } from "../actions"

export default function(state = null, action) {
	/**
	 * this generates a State Object containing an array of coins
	 */
	switch (action.type) {
		case FETCH_COIN_INDEX:
			return action.payload.coins;

		default:
			return state;
	}
}