import { APPEND_SNAPSHOT_INDEX } from "../actions"

export default function(state = {}, action) {
	switch (action.type) {
		case APPEND_SNAPSHOT_INDEX:
			const symbol_safe = action.payload[0];
			const snapDateTimes = action.payload[1];

			// concat new entry to array of coin-name indexed snapshot datetimes
			return Object.assign({}, state, {[symbol_safe]: snapDateTimes});

		default:
			return state;
	}
}