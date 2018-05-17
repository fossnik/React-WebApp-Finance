import React, { Component } from 'react'
import CoinIndex from './tables/CoinIndex'
import SnapshotIndex from './tables/SnapshotIndex'
import SnapshotDetail from './tables/SnapshotDetail'
import { connect } from 'react-redux'

class Table extends Component {
	render() {
		if (this.props.activeCoin && this.props.activeSnapshot)
			return <SnapshotDetail/>;

		if (this.props.activeCoin)
			return <SnapshotIndex/>;

		if (this.props.coins)
			return <CoinIndex/>;

		return <div>Loading...</div>
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins,
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
	}
}

export default connect(mapStateToProps)(Table)