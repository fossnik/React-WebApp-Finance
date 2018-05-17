import React, { Component } from 'react'
import '../Table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCoin } from "../../actions"

class CoinIndex extends Component {
	render() {
		if (this.props.coins)
			return <div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Name</th>
						<th>Pair Symbol</th>
					</tr>
					</thead>
					<tbody className="Table-body Click-able">
					{this.props.coins.map(coin => (
						<tr
							key={coin.symbol_safe}
							onClick={() => this.props.selectCoin(coin.symbol_safe)}
						>
							<td>{coin.name}</td>
							<td>{coin.symbol_full}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>;
		else
			return <div/>;
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectCoin}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinIndex)