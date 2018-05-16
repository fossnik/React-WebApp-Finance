import { SNAPSHOT_SELECTED } from "../actions"

export default function(state = null, action) {
	switch (action.type) {
		case SNAPSHOT_SELECTED:
			return action.payload;

		default:
			return state;
	}
}