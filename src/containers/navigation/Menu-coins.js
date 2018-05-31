import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoinIndex } from "../../actions"

class MenuCoins extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeCoin: props.activeCoin
		};

		this.onCoinChange = this.onCoinChange.bind(this);
	}

	componentDidMount() {
		// load coin index index if not exist
		if (this.props.coins === null)
			this.props.fetchCoinIndex()
	}

	onCoinChange(event) {
		this.setState({activeCoin: event.target.value});
		this.props.history.push(`/db/${event.target.value}`);
	}

	render() {
		if (this.props.coins)
			return <div className='NaviBox-form'>
					<select
					value={this.state.activeCoin || ''}
					onChange={this.onCoinChange}
					className='NaviBox-element'
				>
					{
						this.props.coins.map(coin =>
							<option key={coin.symbol_safe} value={coin.symbol_safe}>
								{coin.name}
							</option>)
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

export default connect(mapStateToProps, {fetchCoinIndex})(MenuCoins)