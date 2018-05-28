import React, { Component } from 'react'
import { connect } from 'react-redux'

class MenuCoins extends Component {
	constructor() {
		super();

		this.onCoinChange = this.onCoinChange.bind(this);
	}

	onCoinChange(event) {
		this.props.history.push(`/db/${event.target.value}`);
	}

	render() {
		if (this.props.coins)
			return <div className='NaviBox-form'>
					<select
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
				</select>
			</div>;
		else
			return <div/>;
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins,
	}
}

export default connect(mapStateToProps)(MenuCoins)