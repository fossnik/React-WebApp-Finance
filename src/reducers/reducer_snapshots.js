import { FETCH_SNAPSHOT_INDEX } from "../actions"

export default function(state = null, action) {
	/**
	 * this generates a State Object containing an array of snapshots
	 */
	switch (action.type) {
		case FETCH_SNAPSHOT_INDEX:
			return action.payload.snapshots;

		default:
			return state;
	}
}