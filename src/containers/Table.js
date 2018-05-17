import React, { Component } from 'react'
import CoinIndex from './views/CoinIndex'
import SnapshotIndex from './views/SnapshotIndex'
import SnapshotDetail from './views/SnapshotDetail'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCoinIndex } from "../actions";

class Table extends Component {
	constructor() {
		super();

		this.onCoinChange = this.onCoinChange.bind(this);
	}

	render() {
		if (this.props.activeCoin && this.props.activeSnapshot)
			return <SnapshotDetail/>;

		if (this.props.activeCoin)
			return <SnapshotIndex/>;

		if (this.props.coins)
			return <CoinIndex/>;

		this.props.fetchCoinIndex();
		return <div>Loading...</div>
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchCoinIndex}, dispatch)
}

function mapStateToProps(state) {
	return {
		coins: state.coins,
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)