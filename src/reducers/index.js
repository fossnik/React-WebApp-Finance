import { combineReducers } from 'redux'
import CoinsReducer from './reducer_coins'

const rootReducer = combineReducers({

	/** each Reducer adds a Key to our Global Application State
	 * thusly:
	 * 	<AppState Key> : <what the discrete Reducer passes back>
	 */

	coins: CoinsReducer,
});

export default rootReducer;