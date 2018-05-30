import { APPEND_SNAPSHOT_INDEX } from "../actions"
import { APPEND_SNAPSHOT_DETAIL } from "../actions"

export default function(state = {}, action) {
	switch (action.type) {
		case APPEND_SNAPSHOT_INDEX:
			const {symbol_safe, snapshots} = action.payload;

			// concat new entry to array of coin-name indexed snapshot datetimes
			return Object.assign({}, state, {scrapeDates: {[symbol_safe]: snapshots}});

		case APPEND_SNAPSHOT_DETAIL:
			const details = action.payload.details;

			// ES6 Key Interpolation Syntax
			return { ...state, details: {[details.symbol_safe]: {[details.ID]: details}}};

		default:
			return state;
	}
}