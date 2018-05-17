import React, { Component } from 'react'
import CoinIndex from './views/CoinIndex'
import SnapshotIndex from './views/SnapshotIndex'
import SnapshotDetail from './views/SnapshotDetail'
import { connect } from 'react-redux'

class Table extends Component {
	render() {
		if (this.props.activeCoin && this.props.activeSnapshot)
			return <SnapshotDetail/>;

		if (this.props.activeCoin)
			return <SnapshotIndex/>;

		return <CoinIndex/>;
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