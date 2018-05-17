import { API_URL } from '../config';

// helps keep our action types consistent between our action creators and reducers
export const FETCH_COIN_INDEX = 'FETCH_COIN_INDEX';
export const COIN_SELECTED = 'COIN_SELECTED';

export const SNAPSHOT_SELECTED = 'SNAPSHOT_SELECTED';

export function fetchCoinIndex() {
	return fetch(API_URL)
		.then(response => response.json().then(json => {
			return response.ok ? json : Promise.reject(json)
		}))
		.then(response => {
			return {
				type: FETCH_COIN_INDEX,
				payload: {coins: response.coins}
			}
		})
		.catch(error => {
			console.error("Could not Load from API\n" + error)
		})
}

export function selectCoin(coin) {
	// selectCoin is an ActionCreator - it needs to return an action.
	// an action is an object with a type property.
	return {
		type: COIN_SELECTED,
		payload: coin,
	}
}

export function selectSnapshot(snapId) {
	return {
		type: SNAPSHOT_SELECTED,
		payload: snapId,
	}
}