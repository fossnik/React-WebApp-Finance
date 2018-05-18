import { APPEND_SNAPSHOT_INDEX } from "../actions"

export default function(state = [], action) {
	switch (action.type) {
		case APPEND_SNAPSHOT_INDEX:
			const symbol_safe = action.payload[0];
			const snapDateTimes = action.payload[1];
			return [Object.assign({}, {symbol_safe}, {snapDateTimes}), ...state];

		default:
			return state;
	}
}