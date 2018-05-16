import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCoin, fetchCoinIndex, selectSnapshot } from "../actions"

class CoinMenu extends Component {
	constructor(props) {
		super(props);

		// binds component state to onCoinChange method (makes state context accessible)
		this.onCoinChange = this.onCoinChange.bind(this);
	}

	componentDidMount() {
		this.props.fetchCoinIndex()
	}

	onCoinChange(event) {
		this.props.selectSnapshot(null);
		this.props.selectCoin(event.target.value);
	}

	render() {
		// "mapStateToProps" passes in "this.props"
		// this.renderMenu will pass back an array of coins as HTML "<option>" strings
		if (this.props.coins)
			return <select
				value={this.props.activeCoin || ''}
				onChange={this.onCoinChange}
				className='NaviBox-element'
			>
				{
					this.props.coins.map(coin => {
						return <option key={coin.symbol_safe} value={coin.symbol_safe}>
							{coin.name}
						</option>
					})
				}
			</select>;
		else
			return <div/>;
	}
}

// this passes the Global Application State onto this container's local properties
function mapStateToProps(state) {
	// whatever is returned will be the props of CoinMenu (local scope)
	// this must be in concert with the state keys defined in the root reducer
	return {
		coins: state.coins,
		activeCoin: state.activeCoin,
	}
}

// this passes the result of the dispatch function through all of our reducers
function mapDispatchToProps(dispatch) {
	// allows us to call the "this.props.selectCoin" inside of our container
	// that will call our action creator
	return bindActionCreators({selectCoin, fetchCoinIndex, selectSnapshot}, dispatch)
}

/** this React-Redux "connect" method undergirds the magic of "Smart Components"
 * Connect hooks together a function with some of the global Application State Data to form a Smart Component
 * by joining the state data of "mapStateToProps" to the function "CoinMenu" - thereby establishing a "Container"
 */
export default connect(mapStateToProps, mapDispatchToProps)(CoinMenu)