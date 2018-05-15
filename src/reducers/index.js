import { combineReducers } from 'redux'
import CoinsReducer from './reducer_coins'
import ActiveCoin from './reducer_active_coin'

const rootReducer = combineReducers({

	/** each Reducer adds a Key to our Global Application State
	 * thusly:
	 * 	<AppState Key> : <what the discrete Reducer passes back>
	 */

	coins: CoinsReducer,
	activeCoin: ActiveCoin,
});

export default rootReducer;