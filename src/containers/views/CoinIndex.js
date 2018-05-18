import React, { Component } from 'react'
import '../Table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCoinIndex, selectCoin } from "../../actions"

class CoinIndex extends Component {
	componentDidMount() {
		this.props.fetchCoinIndex()
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
							onClick={() => this.props.selectCoin(coin.symbol_safe)}
						>
							<td>{coin.symbol_full}</td>
							<td>{coin.name}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>;
		else
			return <div>Loading Coin Index...</div>
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectCoin, fetchCoinIndex}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinIndex)