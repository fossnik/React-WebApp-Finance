import { APPEND_SNAPSHOT_INDEX } from "../actions"

export default function(state = {}, action) {
	switch (action.type) {
		case APPEND_SNAPSHOT_INDEX:
			const {symbol_safe, snapshots} = action.payload;

			// concat new entry to array of coin-name indexed snapshot datetimes
			return Object.assign({}, state, {[symbol_safe]: snapshots});

		default:
			return state;
	}
}