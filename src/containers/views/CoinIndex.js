import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoinIndex } from "../../actions"

class CoinIndex extends Component {
	constructor() {
		super();

		this.onCoinClick = this.onCoinClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchCoinIndex()
	}

	onCoinClick(symbol_safe) {
		this.props.history.push(`/db/${symbol_safe}`)
	}

	render() {
		const coins = this.props.coins;

		if (coins)
			return <div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Pair Symbol</th>
						<th>Name</th>
					</tr>
					</thead>
					<tbody className="Table-body Click-able">
					{coins.map(coin => (
						<tr
							key={coin.symbol_safe}
							onClick={() => this.onCoinClick(coin.symbol_safe)}
						>
							<td>{coin.symbol_full}</td>
							<td>{coin.name}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>;
		else
			return <div className='Loading'>Loading Coin Index...</div>;
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins
	}
}

export default connect(mapStateToProps, {fetchCoinIndex})(CoinIndex)