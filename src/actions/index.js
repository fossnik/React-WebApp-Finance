import { API_URL } from '../config';

// helps keep our action types consistent between our action creators and reducers
export const FETCH_COIN_INDEX = 'FETCH_COIN_INDEX';
export const APPEND_SNAPSHOT_INDEX = 'APPEND_SNAPSHOT_INDEX';

export function fetchCoinIndex() {
	return fetch(API_URL)
		.then(response => response.json().then(json => response.ok ? json : Promise.reject(json)))
		.then(response => {
			return {
				type: FETCH_COIN_INDEX,
				payload: {coins: response.coins}
			}
		})
		.catch(error => console.error("Could not Load from API\n" + error))
}

export function fetchListOfSnapshotsForSingleCoin(symbol_safe) {
	return fetch(`${API_URL}/${symbol_safe}`)
		.then(response => response.json().then(json => response.ok ? json : Promise.reject(json)))
		.then(response => {
			return {
				type: APPEND_SNAPSHOT_INDEX,
				payload: { symbol_safe, snapshots: response.snapshots }
			}
		})
		.catch(error => console.error("Could not Load from API\n" + error))
}