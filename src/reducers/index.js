import { combineReducers } from 'redux'
import CoinsReducer from './reducer_coins'
import Snapshots from './reducer_snapshots_immutable'

const rootReducer = combineReducers({
	coins: CoinsReducer,
	allSnapshots: Snapshots,
});

export default rootReducer